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

function App() {
  const [signedIn] = useState(false);
  const [ready] = useState(true);

  const [signUpDialog, setSignUpDialog] = useState(false)
  const [signInDialog, setSignInDialog] = useState(false)
  //const [settingsDialog, setSettingsDialog] = useState(false)

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
