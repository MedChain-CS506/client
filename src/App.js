import React, { useState, useEffect } from 'react';

import readingTime from 'reading-time';

//* MUI
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './utils/theme';
import { auth, firestore } from './firebase';
import authentication from './utils/authentication'; // ? Needed

//* Components
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import DialogHost from './components/Dialog/DialogHost';

//* Pages
import Routes from './pages/Routes';

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [ready, setReady] = useState(false);
  const [performingAction, setPerformingAction] = useState(false);
  const [dialog, setDialog] = useState({
    signUpDialog: false,
    signInDialog: false,
    settingsDialog: false,
    signOutDialog: false,
    deleteAccountDialog: false,
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    autoHideDuration: 0,
    message: '',
  });

  useEffect(() => {
    const removeAuthStateChangedObserver = auth.onAuthStateChanged(user => {
      //* if there is no user...
      if (!user) {
        setUser(null);
        setUserData(null);
        setSignedIn(false);
        setReady(true);
        return;
      }

      const { uid } = user;

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

      const removeReferenceListener = reference.onSnapshot(snapshot => {
        //! ADDED CONST HERE INSTEAD OF THIS
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
      });
    });

    return () => {
      if (removeAuthStateChangedObserver) {
        removeAuthStateChangedObserver();
      }
    };
  }, []);

  // const deleteAccount = () => {
  //   setPerformingAction(true);
  //   authentication
  //     .deleteAccount()
  //     .then(() => {
  //       setDialog({ ...dialog, deleteAccountDialog: false });
  //       openSnackbar('Deleted account');
  //     })
  //     .catch(reason => {
  //       const { code } = reason;
  //       const { message } = reason;

  //       switch (code) {
  //         default:
  //           this.openSnackbar(message);
  //       }
  //     })
  //     .finally(() => {
  //       setPerformingAction(false);
  //     });
  // };

  const openSnackbar = (message, autoHideDuration = 2) => {
    setSnackbar({
      open: true,
      message,
      autoHideDuration: readingTime(message).time * autoHideDuration,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      {!ready && <Loading />}
      {ready && (
        <>
          <Navbar
            signedIn={signedIn}
            performingAction={performingAction}
            user={user}
            userData={userData}
            onSignUpClick={() => setDialog({ ...dialog, signUpDialog: true })}
            onSignInClick={() => setDialog({ ...dialog, signInDialog: true })}
            onSettingsClick={() =>
              setDialog({ ...dialog, settingsDialog: true })
            }
            onSignOutClick={() => setDialog({ ...dialog, signOutDialog: true })}
          />

          <Routes signedIn={signedIn} />

          <DialogHost
            signedIn={signedIn}
            dialogs={{
              signUpDialog: {
                dialogProps: {
                  open: dialog.signUpDialog,
                  onClose: () => setDialog({ ...dialog, signUpDialog: false }),
                },

                props: {
                  performingAction,
                  openSnackbar: message => openSnackbar(message),
                },
              },

              signInDialog: {
                dialogProps: {
                  open: dialog.signInDialog,
                  onClose: () => setDialog({ ...dialog, signInDialog: false }),
                },

                props: {
                  performingAction,
                  openSnackbar: message => openSnackbar(message),
                },
              },

              settingsDialog: {
                dialogProps: {
                  open: dialog.settingsDialog,
                  onClose: () =>
                    setDialog({ ...dialog, settingsDialog: false }),
                },

                props: {
                  user,
                  userData,
                  theme,
                  openSnackbar: message => openSnackbar(message),
                  onDeleteAccountClick: () =>
                    console.log('deleteAccountDialog'),
                },
              },

              deleteAccountDialog: {
                dialogProps: {
                  open: dialog.deleteAccountDialog,
                  onClose: () =>
                    setDialog({ ...dialog, deleteAccountDialog: false }),
                },

                props: {
                  performingAction,
                  userData,
                  deleteAccount: () => console.log('deleteAccount'),
                },
              },

              signOutDialog: {
                dialogProps: {
                  open: dialog.signOutDialog,
                  onClose: () => setDialog({ ...dialog, signOutDialog: false }),
                },

                props: {
                  performingAction,
                },
              },
            }}
          />

          <Snackbar
            open={snackbar.open}
            autoHideDuration={snackbar.autoHideDuration}
            message={snackbar.message}
            onClose={() => setSnackbar({ open: false })} //! MAKE SURE WE DON'T NEED TO DO A SPREAD...
          />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
