import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//*COMPONENTS
import Navbar from './components/layout/Navbar'
import Loading from './components/layout/Loading'
import Modal from './components/layout/Modal'

//*PAGES
import LandingPage from './components/pages/LandingPage'
import Dashboard from './components/pages/Dashboard'
import NotFound from './components/pages/NotFound';

//*MUI
import { ThemeProvider } from '@material-ui/core/styles'; 
import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';

import theming from './theme'

class App extends Component {
  // const [user, setUser] = setState(null);
  // const [userData, setUserData] = setState(null)
  // const [theme, setTheme] = setState(theming.theme)
  // const [signedIn, setSignedIn] = setState(false)
  // const [performingAction, setPerformingAction] = setState(false)
  // const [signUpModal, setSignUpModal] = setState({ open: false })
  // const [signInModal, setSignInModal] = setState({ open: false })
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      userData: null,
      theme: theming.theme,
      signedIn: false,
      ready: true, //!set to false when ready
      performingAction: false,
      signUpModal: {
        open: false
      },
      signInModal: {
        open: false
      }
    };
  }

  openModal = (modalId, callback) => {
    const modal = this.state[modalId]
    if (!modal || modal.open === undefined || null) return;
    modal.open = true;
    this.setState({ modal }, callback);
  }

  closeModal = (modalId, callback) => {
    const modal = this.state[modalId];
    if (!modal || modal.open === undefined || null) return;
    modal.open = false;
    this.setState({ modal }, callback);
  };

  render() {
    const {
      // user,
      // userData,
      // theme,
      signedIn,
      ready,
      performingAction,
      signUpModal,
      signInModal,
    } = this.state;

    return (
      <ThemeProvider theme={theming}>
        <Router>
        {!ready &&
          <Loading />
        }
        {ready && 
          <>
            <Navbar 
              performingAction={performingAction}
              signedIn={signedIn}
              onSignUpClick={() => this.openModal('signUpModal')}
              onSignInClick={() => this.openModal('signInModal')}
            />
            
            />
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path="/dashboard" render={() => (<Dashboard signedIn={this.props.signedIn} />)} />
              {/* <Route exact path="/dashboard" component={Dashboard} /> */}
              <Route exact path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>

            <Modal signedIn={signedIn} 
              modals={
                {
                  signUpModal: {
                    modalProps: {
                      open: signUpModal.open,

                      onClose: (callback) => {
                        this.closeModal('signUpModal');

                        if (callback && typeof callback === 'function') {
                          callback();
                        }
                      }
                    },

                    props: {
                      performingAction: performingAction
                    }
                  },

                  signInModal: {
                    modalProps: {
                      open: signInModal.open,

                      onClose: (callback) => {
                        this.closeModal('signInModal');

                        if (callback && typeof callback === 'function') {
                          callback();
                        }
                      }
                    },

                    props: {
                      performingAction: performingAction
                    }
                  }
                }
              }
            />
        </>
        }
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
