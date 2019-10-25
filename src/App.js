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
import firebase, { firestore } from './firebase';


function App() {
  const [signedIn] = useState(false);
  const [ready] = useState(true);
  const [signUpDialog, setSignUpDialog] = useState(false)
  const [signInDialog, setSignInDialog] = useState(false)

  const signUp = (email, password, confirmationPassword) => {
    if (!email || !password || !confirmationPassword) return;
    if (signedIn) return;
  }

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

                  props: {
                    signUp: () => signUp
                  }
                },

                signInDialog: {
                  dialogProps: {
                    open: signInDialog,

                    onClose: () => setSignInDialog(false)
                  },

                  // props: {
                  //   signIn: () => signIn
                  // }
                }
              }
            }
          />
        </>
      }
    </ThemeProvider>
  )
}

export default App;
