import React, { useState } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

//*Components
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import DialogHost from './components/Dialog/DialogHost';

//*Pages
import Routes from './pages/Routes';

//*MUI
import theme from './theme';

//!ADDED FIREBASE
import firebase, { auth, firestore } from './firebase';
import validate from 'validate.js';
import constraints from './constraints';

function App() {
  const [signedIn] = useState(false);
  const [ready] = useState(true);

  const [signUpDialog, setSignUpDialog] = useState(false)
  const [signInDialog, setSignInDialog] = useState(false)
  //const [settingsDialog, setSettingsDialog] = useState(false)



  //!NOT WORKING
  // const signUp = (firstName, email, password, passwordConfirmation) => {
  //   if (!firstName ||!email || !password || !passwordConfirmation) return;
  //   if (signedIn) return;

  //   const errors = validate({
  //     firstName: firstName,
  //     email: email,
  //     password: password,
  //     passwordConfirmation: passwordConfirmation
  //   }, {
  //     firstName: constraints.firstName,
  //     emailAddress: constraints.emailAddress,
  //     password: constraints.password,
  //     passwordConfirmation: constraints.passwordConfirmation
  //   });

  //   if (errors) return

  //   auth.createUserWithEmailAndPassword(email ,password).then((value) => {

  //     const user = value.user
  //     const uid = user.uid

  //     firestore.collection('users').doc(uid).set({
  //       firstName: firstName
  //     }).then(() => setSignUpDialog(false))
  //   })
  // }



  return (
    <ThemeProvider theme={theme}>
      {!ready &&
        <Loading />
      }
      {ready &&
        <>
          <Navbar
            signedIn={signedIn}
            onSignUpClick={() => setSignUpDialog(true)}
            onSignInClick={() => setSignInDialog(true)}
            //onSettingsClick={() => setSettingsDialog(true)}
          />

          <Routes signedIn={signedIn} />
          
          <DialogHost
            signedIn={signedIn}
            dialogs={
              {
                signUpDialog: {
                  dialogProps: {
                    open: signUpDialog,

                    onClose: () => setSignUpDialog(false)
                  },

                  // props: {
                  //   signUp: () => signUp //!SIGN UP
                  // }
                },

                signInDialog: {
                  dialogProps: {
                    open: signInDialog,

                    onClose: () => setSignInDialog(false)
                  },

                  // props: {
                  //   signIn: () => signIn
                  // }
                },

                // settingsDialog: {
                //   dialogProps: {
                //     open: settingsDialog,

                //     onClose: () => setSettingsDialog(false)
                //   }
                // }
              }
            }
          />
        </>
      }
    </ThemeProvider>
  )
}

export default App;
