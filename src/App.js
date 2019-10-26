import React, { useState, useEffect } from 'react';

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
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  // const [performingAction, setPerformingAction]= useState(false)

  const [signedIn, setSignedIn] = useState(false);
  const [ready, setReady] = useState(true);
  const [signUpDialog, setSignUpDialog] = useState(false)
  const [signInDialog, setSignInDialog] = useState(false)
  const [settingsDialog, setSettingsDialog] = useState(false)

  const [signOutDialog, setSignOutDialog] = useState(false) //!ADDED


  const [mounted, setMounted] = useState(false) //!FOR THE USEEFFECT BELOW


  useEffect(() => {
    setMounted(true)

    const removeAuthStateChangedObserver = auth.onAuthStateChanged((user) => {
      //* if there is no user...
      if (!user) {
        // if (removeReferenceListener) {
        //   removeReferenceListener()
        // }

        if (mounted) {
          setUser(null)
          setUserData(null)
          setSignedIn(false)
          setReady(true)
        }

        return

      }

      const uid = user.uid

      //* if there is no uid...
      if (!uid) {
        // if (removeReferenceListener) {
        //   removeReferenceListener()
        // }

        if (mounted) {
          setUser(null)
          setUserData(null)
          setSignedIn(false)
          setReady(true)
        }

        return

      }

      const reference = firestore.collection('users').doc(uid)

      //* if there is no reference...
      if (!reference) {
        if (this.removeReferenceListener) {
          this.removeReferenceListener();
        }

        if (mounted) {
          setUser(null)
          setUserData(null)
          setSignedIn(false)
          setReady(true)
        }

        return

      }

      const removeReferenceListener = reference.onSnapshot((snapshot) => { //!ADDED CONST HERE INSTEAD OF THIS
        if (!snapshot.exists) {
          if (removeReferenceListener) {
            removeReferenceListener();
          }

          if (mounted) {
            setUser(null)
            setUserData(null)
            setSignedIn(false)
            setReady(true)
          }

          return

        }

        const data = snapshot.data();

        if (!data) {
          if (removeReferenceListener) {
            removeReferenceListener();
          }

          if (mounted) {
            setUser(null)
            setUserData(null)
            setSignedIn(false)
            setReady(true)
          }

          return

        }

        if (mounted) {
          setUser(user)
          setUserData(data)
          setSignedIn(true)
          setReady(true)
        }

      })
    })

    //!FOR THE componentWillUnmount
    return () => {
      if (removeAuthStateChangedObserver) {
        removeAuthStateChangedObserver();
      }
  
      // if (removeReferenceListener) {
      //   removeReferenceListener();
      // }
  
      setMounted(false);
    }

  }, [mounted]) 








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
