import firebase, { analytics, auth, firestore, storage } from '../firebase';

// const avatarFileTypes = [
//   'image/gif',
//   'image/jpeg',
//   'image/png',
//   'image/webp',
//   'image/svg+xml'
// ];

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
  console.log('email:', email)
  console.log('password:', password)
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

authentication.signInWithAuthProvider = (providerId) => {
  return new Promise((resolve, reject) => {
    if (!providerId) {
      reject()
      return
    }

    const provider = new firebase.auth.OAuthProvider(providerId)

    if (!provider) {
      reject()
      return
    }

    const currentUser = auth.currentUser

    if (currentUser) {
      reject()
      return
    }

    auth.signInWithPopup(provider).then((value) => {
      analytics.logEvent('login', {
        method: providerId
      });

      resolve(value);
    }).catch((reason) => {
      reject(reason);
    });
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

export default authentication;