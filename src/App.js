//!Read src README.md before looking here 

import React, { Component } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

//*COMPONENTS
import Navbar from './components/Navbar';
import DialogHost from './components/DialogHost';
import Loading from './components/Loading'

//*PAGE
import Routes from './pages/Routes';

import theme from './theme';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      ready: true,
      signUpDialog: {
        open: false
      },
      signInDialog: {
        open: false
      }
    };
  }

  openDialog = (dialogId, callback) => {
    const dialog = this.state[dialogId];

    if (!dialog || dialog.open === undefined || null) {
      return;
    }

    dialog.open = true;

    this.setState({ dialog }, callback);
  };

  closeDialog = (dialogId, callback) => {
    const dialog = this.state[dialogId];

    if (!dialog || dialog.open === undefined || null) {
      return;
    }

    dialog.open = false;

    this.setState({ dialog }, callback);
  };

  render() {
    const {
      signedIn,
      ready,
    } = this.state;

    const {
      signUpDialog,
      signInDialog
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
                onSignUpClick={() => this.openDialog('signUpDialog')}
                onSignInClick={() => this.openDialog('signInDialog')}
              />

              <Routes signedIn={signedIn} />

              <DialogHost
                signedIn={signedIn}
                dialogs={
                  {
                    signUpDialog: {
                      dialogProps: {
                        open: signUpDialog.open,

                        onClose: (callback) => {
                          this.closeDialog('signUpDialog');

                          if (callback && typeof callback === 'function') {
                            callback();
                          }
                        }
                      }
                    },

                    signInDialog: {
                      dialogProps: {
                        open: signInDialog.open,
  
                        onClose: (callback) => {
                          this.closeDialog('signInDialog');
  
                          if (callback && typeof callback === 'function') {
                            callback();
                          }
                        }
                      }
                    },
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