//Read src README.md before looking here 

import React, { Component } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

//*COMPONENTS
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Loading from './components/Loading'

//*PAGE
//import LaunchScreen from './pages/LaunchScreen';
//import Routes from './pages/Routes';

//*MUI
//import Button from '@material-ui/core/Button';

import theme from './theme';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      userData: null,
      theme: theme.defaultTheme,
      signedIn: false,
      ready: true,
      performingAction: false,

      signUpModal: {
        open: false
      },

      signInModal: {
        open: false
      },

    //   settingsDialog: {
    //     open: false
    //   },

    //   signOutDialog: {
    //     open: false
    //   },

    //   snackbar: {
    //     autoHideDuration: 0,
    //     message: '',
    //     open: false
    //   }
    };
  }

  openModal = (dialogId, callback) => {
    const dialog = this.state[dialogId];

    if (!dialog || dialog.open === undefined || null) {
      return;
    }

    dialog.open = true;

    this.setState({ dialog }, callback);
  };

  closeModal = (dialogId, callback) => {
    const dialog = this.state[dialogId];

    if (!dialog || dialog.open === undefined || null) {
      return;
    }

    dialog.open = false;

    this.setState({ dialog }, callback);
  };

  // signOut = () => {
  //   this.setState({
  //     performingAction: true
  //   }, () => {
  //     authentication.signOut().then(() => {
  //       this.closeDialog('signOutDialog', () => {
  //         this.openSnackbar('Signed out');
  //       });
  //     }).catch((reason) => {
  //       const code = reason.code;
  //       const message = reason.message;

  //       switch (code) {
  //         default:
  //           this.openSnackbar(message);
  //           return;
  //       }
  //     }).finally(() => {
  //       this.setState({
  //         performingAction: false
  //       });
  //     });
  //   });
  // };

  // openSnackbar = (message, autoHideDuration = 2, callback) => {
  //   this.setState({
  //     snackbar: {
  //       autoHideDuration: readingTime(message).time * autoHideDuration,
  //       message,
  //       open: true
  //     }
  //   }, () => {
  //     if (callback && typeof callback === 'function') {
  //       callback();
  //     }
  //   });
  // };

  // closeSnackbar = (clearMessage = false) => {
  //   const { snackbar } = this.state;

  //   this.setState({
  //     snackbar: {
  //       message: clearMessage ? '' : snackbar.message,
  //       open: false
  //     }
  //   });
  // };

  render() {
    const {
      user,
      userData,
      theme,
      signedIn,
      ready,
      performingAction,
    } = this.state;

    const {
      signUpModal,
      signInModal,
      // settingsDialog,
      // signOutDialog
    } = this.state;

    //const { snackbar } = this.state;

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

                onSignUpClick={() => this.openModal('signUpModal')}
                onSignInClick={() => this.openModal('signInModal')}

                // onSettingsClick={() => this.openDialog('settingsDialog')}
                // onSignOutClick={() => this.openDialog('signOutDialog')}
              />

              {/* <Routes signedIn={signedIn} /> */}

              <Modal
                signedIn={signedIn}
                dialogs={
                  {
                    signUpModal: {
                      dialogProps: {
                        open: signUpModal.open,

                        onClose: (callback) => {
                          this.closeModal('signUpModal');

                          if (callback && typeof callback === 'function') {
                            callback();
                          }
                        }
                      },

                      props: {
                        performingAction: performingAction,

                        //openSnackbar: this.openSnackbar
                      }
                    },

                    signInModal: {
                      dialogProps: {
                        open: signInModal.open,

                        onClose: (callback) => {
                          this.closeModal('signInModal');

                          if (callback && typeof callback === 'function') {
                            callback();
                          }
                        }
                      },

                      props: {
                        performingAction: performingAction,

                        //openSnackbar: this.openSnackbar
                      }
                    },

                    // settingsDialog: {
                    //   dialogProps: {
                    //     open: settingsDialog.open,
                    //     disableEscapeKeyDown: true,

                    //     onClose: () => this.closeDialog('settingsDialog')
                    //   },

                    //   props: {
                    //     user: user,
                    //     userData: userData,
                    //     theme: theme,

                    //     openSnackbar: this.openSnackbar
                    //   }
                    // },

                    // signOutDialog: {
                    //   dialogProps: {
                    //     open: signOutDialog.open,

                    //     onClose: () => this.closeDialog('signOutDialog')
                    //   },

                    //   props: {
                    //     title: 'Sign out?',
                    //     contentText: 'While signed out you are unable to manage your profile and conduct other activities that require you to be signed in.',
                    //     dismissiveAction: <Button color="primary" onClick={() => this.closeDialog('signOutDialog')}>Cancel</Button>,
                    //     confirmingAction: <Button color="primary" disabled={performingAction} variant="contained" onClick={this.signOut}>Sign Out</Button>
                    //   }
                    // }
                  }
                }
              />

              {/* <Snackbar
                autoHideDuration={snackbar.autoHideDuration}
                message={snackbar.message}
                open={snackbar.open}
                onClose={this.closeSnackbar}
              /> */}
            </>
          }
      </ThemeProvider>
    );
  }

  // componentDidMount() {
  //   this.mounted = true;

  //   this.removeAuthStateChangedObserver = auth.onAuthStateChanged((user) => {
  //     if (!user) {
  //       if (this.removeReferenceListener) {
  //         this.removeReferenceListener();
  //       }

  //       if (this.mounted) {
  //         this.setState({
  //           user: null,
  //           userData: null,
  //           theme: theme.defaultTheme,

  //           signedIn: false,
  //           ready: true
  //         });
  //       }

  //       return;
  //     }

  //     const uid = user.uid;

  //     if (!uid) {
  //       if (this.removeReferenceListener) {
  //         this.removeReferenceListener();
  //       }

  //       if (this.mounted) {
  //         this.setState({
  //           user: null,
  //           userData: null,
  //           theme: theme.defaultTheme,

  //           signedIn: false,
  //           ready: true
  //         });
  //       }

  //       return;
  //     }

  //     const reference = firestore.collection('users').doc(uid);

  //     if (!reference) {
  //       if (this.removeReferenceListener) {
  //         this.removeReferenceListener();
  //       }

  //       if (this.mounted) {
  //         this.setState({
  //           user: null,
  //           userData: null,
  //           theme: theme.defaultTheme,

  //           signedIn: false,
  //           ready: true
  //         });
  //       }

  //       return;
  //     }

  //     this.removeReferenceListener = reference.onSnapshot((snapshot) => {
  //       if (!snapshot.exists) {
  //         if (this.removeReferenceListener) {
  //           this.removeReferenceListener();
  //         }

  //         if (this.mounted) {
  //           this.setState({
  //             user: null,
  //             userData: null,
  //             theme: theme.defaultTheme,

  //             signedIn: false,
  //             ready: true
  //           });
  //         }

  //         return;
  //       }

  //       const data = snapshot.data();

  //       if (!data) {
  //         if (this.removeReferenceListener) {
  //           this.removeReferenceListener();
  //         }

  //         if (this.mounted) {
  //           this.setState({
  //             user: null,
  //             userData: null,
  //             theme: theme.defaultTheme,

  //             signedIn: false,
  //             ready: true
  //           });
  //         }

  //         return;
  //       }

  //       if (data.theme) {
  //         this.setState({
  //           theme: theme.createTheme(data.theme)
  //         });
  //       } else {
  //         this.setState({
  //           theme: theme.defaultTheme
  //         });
  //       }

  //       if (this.mounted) {
  //         this.setState({
  //           user: user,
  //           userData: data,

  //           signedIn: true,
  //           ready: true
  //         });
  //       }
  //     }, (error) => {
  //       if (this.removeReferenceListener) {
  //         this.removeReferenceListener();
  //       }

  //       if (this.mounted) {
  //         this.setState({
  //           user: null,
  //           userData: null,
  //           theme: theme.defaultTheme,

  //           signedIn: false,
  //           ready: true
  //         }, () => {
  //           const code = error.code;
  //           const message = error.message;

  //           switch (code) {
  //             default:
  //               this.openSnackbar(message);
  //               return;
  //           }
  //         });
  //       }
  //     });
  //   });
  // }

  // componentWillUnmount() {
  //   if (this.removeAuthStateChangedObserver) {
  //     this.removeAuthStateChangedObserver();
  //   }

  //   if (this.removeReferenceListener) {
  //     this.removeReferenceListener();
  //   }

  //   this.mounted = false;
  // }
}

export default App;