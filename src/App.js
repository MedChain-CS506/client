import React, { useState, useEffect } from 'react';

import readingTime from 'reading-time';

import theme from './theme';
import { auth, firestore } from './firebase';
import authentication from './services/authentication';

//*Components
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import DialogHost from './components/Dialog/DialogHost';

//*Pages
import Routes from './pages/Routes';

//*MUI
import { ThemeProvider } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

function App() {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [signedIn, setSignedIn] = useState(false);
  const [ready, setReady] = useState(false);
  const [performingAction, setPerformingAction]= useState(false)
  const [dialog, setDialog] = useState({
    signUpDialog: false,
    signInDialog: false,
    settingsDialog: false,
    signOutDialog: false
  })
  //!Add this above
  //const [deleteAccountDialog, setDeleteAccountDialog] = useState(false)
  const [snackbar, setSnackbar] = useState({ 
    open: false, 
    autoHideDuration: 0, 
    message: '' 
  })

  //console.log(snackbar)

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

  // const deleteAccount = () => {
  //   setPerformingAction(true)
  //   authentication.deleteAccount().then(() => {

  //   }).catch((reason) => {

  //   }).finally(() => {
  //     setPerformingAction(false)
  //   })
  // }

  const openSnackbar = (message, autoHideDuration = 2) => {
    setSnackbar({ 
      open: true,
      message, 
      autoHideDuration: readingTime(message).time * autoHideDuration, 
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
            onSignUpClick={() => setDialog({...dialog, signUpDialog: true})}
            onSignInClick={() => setDialog({...dialog, signInDialog: true})}
            onSettingsClick={() => setDialog({...dialog, settingsDialog: true})}
            onSignOutClick={() => setDialog({...dialog, signOutDialog: true})}
          />

          <Routes signedIn={signedIn} />
          
          <DialogHost
            signedIn={signedIn}
            dialogs={
              {
                signUpDialog: {
                  dialogProps: {
                    open: dialog.signUpDialog,
                    onClose: () => setDialog({...dialog, signUpDialog: false})
                  },

                  props: {
                    performingAction: performingAction,
                    openSnackbar: (message) => openSnackbar(message)
                  }
                },

                signInDialog: {
                  dialogProps: {
                    open: dialog.signInDialog,
                    onClose: () => setDialog({...dialog, signInDialog: false})
                  },

                  props: {
                    performingAction: performingAction,
                    openSnackbar: (message) => openSnackbar(message),
                  }
                },

                settingsDialog: {
                  dialogProps: {
                    open: dialog.settingsDialog,
                    onClose: () => setDialog({...dialog, settingsDialog: false})
                  },

                  props: {
                    openSnackbar: (message) => openSnackbar(message)
                  }
                },

                // deleteAccountDialog: {
                //   dialogProps: {
                //     open: deleteAccountDialog.open,

                //     onClose: () => this.closeDialog('deleteAccountDialog')
                //   },

                //   props: {
                //     performingAction: performingAction,
                //     userData: userData,

                //     deleteAccount: this.deleteAccount
                //   }
                // },

                signOutDialog: {
                  dialogProps: {
                    open: dialog.signOutDialog,
                    onClose: () => setDialog({...dialog, signOutDialog: false})
                  },

                  props: {
                    performingAction: performingAction
                  }
                }
              }
            }
          />

          <Snackbar
            open={snackbar.open}
            autoHideDuration={snackbar.autoHideDuration}
            message={snackbar.message}
            onClose={() => setSnackbar({ open: false })} //!MAKE SURE WE DON'T NEED TO DO A SPREAD HERE
          />
        </>
      }
    </ThemeProvider>
  )
}

export default App;
