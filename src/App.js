//!Read src README.md before looking here 

import React, { Component } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

//*COMPONENTS
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Loading from './components/Loading'

//*PAGE
//import Routes from './pages/Routes';

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
      }
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
      signUpModal
    } = this.state;

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
                      }
                    }
                  }
                }
              />
            </>
          }
      </ThemeProvider>
    );
  }
}

export default App;