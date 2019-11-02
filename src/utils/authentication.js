import firebase, { analytics, auth, firestore } from '../firebase';

const authentication = {};

authentication.signUp = (fields) => { 
  return new Promise((resolve, reject) => {
    if (!fields) {
      reject();
      return;
    }

    const firstName = fields.firstName;
    const lastName = fields.lastName;
    const email = fields.email;
    const password = fields.password;

    if (!firstName || !lastName || !email || !password) {
      reject();
      return;
    }

    const currentUser = auth.currentUser; 
    console.log('currentUser:', currentUser)

    //IF THERE IS A CURRENT USER, DON'T SIGN THEM UP
    if (currentUser) {
      reject();
      return;
    }

    auth.createUserWithEmailAndPassword(email, password).then((value) => {
      const user = value.user;

      if (!user) {
        reject();
        return;
      }

      const uid = user.uid;

      if (!uid) {
        reject();
        return;
      }

      //STORE THEM IN THE FIREBASE
      const reference = firestore.collection('users').doc(uid);

      if (!reference) {
        reject();
        return;
      }

      reference.set({
        firstName: firstName,
        lastName: lastName,
      }).then((value) => {
        analytics.logEvent('sign_up', {
          method: 'password'
        });

        resolve(value);
      }).catch((reason) => {
        reject(reason);
      });
    }).catch((reason) => {
      reject(reason);
    });
  });
};

authentication.signIn = (email, password) => {
return new Promise((resolve, reject) => {
    if (!email || !password) {
      reject()
      return
    }

    const currentUser = auth.currentUser

    if (currentUser) {
      reject()
      return
    }

    auth.signInWithEmailAndPassword(email, password).then((value) => {
      analytics.logEvent('login', {
        method: 'password'
      })

      resolve(value)
    }).catch((reason) => {
      reject(reason)
    }) 
  })
}

authentication.signOut = () => {
  return new Promise((resolve, reject) => {
    const currentUser = auth.currentUser
    
    if (!currentUser) {
      reject()
      return
    }

    auth.signOut().then((value) => {
      analytics.logEvent('sign_out');
      
      resolve(value)
    }).catch((reason) => {
      reject(reason)
    })
  })
}

authentication.changeFirstName = (firstName) => {
  return new Promise((resolve, reject) => {
    if (!firstName) {
      reject();

      return;
    }

    const currentUser = auth.currentUser;

    if (!currentUser) {
      reject();

      return;
    }

    const uid = currentUser.uid;

    if (!uid) {
      reject();

      return;
    }

    const reference = firestore.collection('users').doc(uid);

    if (!reference) {
      reject();

      return;
    }

    reference.update({
      firstName: firstName
    }).then((value) => {
      analytics.logEvent('change_first_name');

      resolve(value);
    }).catch((reason) => {
      reject(reason);
    });
  });
};

authentication.changeLastName = (lastName) => {
  return new Promise((resolve, reject) => {
    if (!lastName) {
      reject();

      return;
    }

    const currentUser = auth.currentUser;

    if (!currentUser) {
      reject();

      return;
    }

    const uid = currentUser.uid;

    if (!uid) {
      reject();

      return;
    }

    const reference = firestore.collection('users').doc(uid);

    if (!reference) {
      reject();

      return;
    }

    reference.update({
      lastName: lastName
    }).then((value) => {
      analytics.logEvent('change_last_name');

      resolve(value);
    }).catch((reason) => {
      reject(reason);
    });
  });
};

authentication.changeEmail = (email) => {
  return new Promise((resolve, reject) => {
    if (!email) {
      reject();

      return;
    }

    const currentUser = auth.currentUser;

    if (!currentUser) {
      reject();

      return;
    }

    const uid = currentUser.uid;

    if (!uid) {
      reject();

      return;
    }

    currentUser.updateEmail(email).then((value) => {
      analytics.logEvent('change_email_address');

      resolve(value);
    }).catch((reason) => {
      reject(reason);
    });
  });
};

authentication.changePassword = (password) => {
  return new Promise((resolve, reject) => {
    if (!password) {
      reject();

      return;
    }

    const currentUser = auth.currentUser;

    if (!currentUser) {
      reject();

      return;
    }

    const uid = currentUser.uid;

    if (!uid) {
      reject();

      return;
    }

    currentUser.updatePassword(password).then((value) => {
      const reference = firestore.collection('users').doc(uid);

      if (!reference) {
        reject();

        return;
      }

      reference.update({
        lastPasswordChange: firebase.firestore.FieldValue.serverTimestamp()
      }).then((value) => {
        analytics.logEvent('change_password');

        resolve(value);
      }).catch((reason) => {
        reject(reason);
      });
    }).catch((reason) => {
      reject(reason);
    });
  });
};

authentication.deleteAccount = () => {
  return new Promise((resolve, reject) => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      reject();

      return;
    }

    currentUser.delete().then((value) => {
      analytics.logEvent('delete_account');

      resolve(value);
    }).catch((reason) => {
      reject(reason);
    });
  });
};

export default authentication;