import React, { useState, useEffect } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import readingTime from 'reading-time';

//*Components
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import DialogHost from './components/Dialog/DialogHost';

//*Pages
import Routes from './pages/Routes';

//*MUI
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

import theme from './theme';

import { auth, firestore } from './firebase';
import authentication from './services/authentication';

function App() {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [performingAction, setPerformingAction]= useState(false)

  const [signedIn, setSignedIn] = useState(false);
  const [ready, setReady] = useState(true);
  const [signUpDialog, setSignUpDialog] = useState(false)
  const [signInDialog, setSignInDialog] = useState(false)
  const [settingsDialog, setSettingsDialog] = useState(false)

  const [snackbar, setSnackbar] = useState({ autoHideDuration: 0, message: '', open: false })

  const [signOutDialog, setSignOutDialog] = useState(false)

  useEffect(() => {
    const removeAuthStateChangedObserver = auth.onAuthStateChanged(
      user => {
        //* if there is no user...
        if (!user) {
          setUser(null);
          setUserData(null);
          setSignedIn(false);
          setReady(true);
          return;
        }

        const uid = user.uid;
  
        //* if there is no uid...
        if (!uid) {
          setUser(null);
          setUserData(null);
          setSignedIn(false);
          setReady(true);
          return;
        }
  
        const reference = firestore.collection('users').doc(uid);
  
        //* if there is no reference...
        if (!reference) {  
          setUser(null);
          setUserData(null);
          setSignedIn(false);
          setReady(true);
          return;
        }

        const removeReferenceListener = reference.onSnapshot(
          snapshot => {
            //!ADDED CONST HERE INSTEAD OF THIS
            if (!snapshot.exists) {
              if (removeReferenceListener) {
                removeReferenceListener();
              }
              setUser(null);
              setUserData(null);
              setSignedIn(false);
              setReady(true);
              return;
            }
  
            const data = snapshot.data();
  
            if (!data) {
              if (removeReferenceListener) {
                removeReferenceListener();
              }
  
              setUser(null);
              setUserData(null);
              setSignedIn(false);
              setReady(true);
              return;
            }
  
            setUser(user);
            setUserData(data);
            setSignedIn(true);
            setReady(true);
          }
        );
      }
    );
  
    return () => {
      if (removeAuthStateChangedObserver) {
        removeAuthStateChangedObserver();
      }
    };
  }, [])

  const signOut = () => {
    authentication.signOut().then(() => setSignOutDialog(false))
  }

  const openSnackbar = (message, autoHideDuration = 2, callback) => { //!CORRECT WAY TO DO A CALLBACK?
    setSnackbar({ 
      autoHideDuration: readingTime(message).time * autoHideDuration, 
      message, 
      open: true
      }, () => {
      if (callback && typeof callback === 'function') {
        callback();
      }
    });
  };

  const closeSnackbar = (clearMessage = false) => {
    setSnackbar({
        message: clearMessage ? '' : snackbar.message,
        open: false
    });
  };
  
  return (
    <ThemeProvider theme={theme}>
      {!ready &&
        <Loading />
      }
      {ready &&
        <>
          <Navbar
            signedIn={signedIn}
            performingAction={performingAction}

            user={user}
            userData={userData}

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
                  },

                  props: {
                    performingAction: performingAction,

                    openSnackbar: () => openSnackbar()
                  }

                },

                signInDialog: {
                  dialogProps: {
                    open: signInDialog,

                    onClose: () => setSignInDialog(false)
                  },

                  props: {
                    performingAction: performingAction,
                    
                    openSnackbar: () => openSnackbar()
                  }
                },

                settingsDialog: {
                  dialogProps: {
                    open: settingsDialog,

                    onClose: () => setSettingsDialog(false)
                  },

                  props: {
                    openSnackbar: () => openSnackbar()
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

          <Snackbar
            autoHideDuration={snackbar.autoHideDuration}
            message={snackbar.message}
            open={snackbar.open}
            onClose={closeSnackbar}
          />
        </>
      }
    </ThemeProvider>
  )
}

export default App;
