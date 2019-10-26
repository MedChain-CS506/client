import firebase, { analytics, auth, firestore, storage } from '../firebase';

const avatarFileTypes = [
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/svg+xml'
];

const authentication = {};

authentication.signUp = (fields) => {
  return new Promise((resolve, reject) => {
    if (!fields) {
      reject();

      return;
    }

    const firstName = fields.firstName;
    const email = fields.email;
    const password = fields.password;

    if (!firstName || !email || !password) {
      reject();

      return;
    }

    const currentUser = auth.currentUser;

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

      const reference = firestore.collection('users').doc(uid);

      if (!reference) {
        reject();

        return;
      }

      reference.set({
        firstName: firstName
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

export default authentication;