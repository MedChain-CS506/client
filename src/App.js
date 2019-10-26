import React, { useState } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

//*Components
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import DialogHost from './components/Dialog/DialogHost';

//*Pages
import Routes from './pages/Routes';

//*MUI
import Button from '@material-ui/core/Button';

import theme from './theme';

//!ADDED FIREBASE
import { auth, firestore } from './firebase';
import authentication from './services/authentication';

function App() {
  // const [user, setUser] = useState(null)
  // const [userData, setUserData] = useState(null)
  // const [performingAction, setPerformingAction]= useState(false)

  const [signedIn] = useState(true);
  const [ready] = useState(true);
  const [signUpDialog, setSignUpDialog] = useState(false)
  const [signInDialog, setSignInDialog] = useState(false)
  const [settingsDialog, setSettingsDialog] = useState(false)

  const [signOutDialog, setSignOutDialog] = useState(false) //!ADDED

  const signOut = () => {
    authentication.signOut().then(() => setSignOutDialog(false))
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
            // performingAction={performingAction}

            // user={user}
            // userData={userData}

            onSignUpClick={() => setSignUpDialog(true)}
            onSignInClick={() => setSignInDialog(true)}
            onSettingsClick={() => setSettingsDialog(true)}
            onSignOutClick={() => setSignOutDialog(true)}
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

                settingsDialog: {
                  dialogProps: {
                    open: settingsDialog,

                    onClose: () => setSettingsDialog(false)
                  }
                },

                signOutDialog: {
                  dialogProps: {
                    open: signOutDialog,

                    onClose: () => setSignOutDialog(false)
                  },

                  props: {
                    title: 'Sign out?',
                    contentText: 'Confirm you would like to sign out.',
                    dismissiveAction: <Button color="primary" onClick={() => setSignOutDialog(false)}>Cancel</Button>,
                    confirmingAction: <Button color="primary" variant="contained" onClick={signOut}>Sign Out</Button>
                  }
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
