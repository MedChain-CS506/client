import React, { setState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//COMPONENTS
import Navbar from './components/layout/Navbar'

//PAGES
import LandingPage from './components/pages/LandingPage'
import NotFound from './components/pages/NotFound';

//MUI
import { ThemeProvider } from '@material-ui/core/styles'; 
import theme from './theme'

function App() {
  //state
  let [signUpModal, setSignUpModal] = setState(false);

  const openModal = (modalId, callback) => {
    console.log('modalId:', modalId)
    // const modal = this.state[modalId]
    // if (!modal || modal.open === undefined || null) return;
    // modal.open = true;
    setSignUpModal({ modal }, callback)
  }

  return (
    <ThemeProvider theme={theme}>

      <Router>
        <Navbar 
          onSignUpClick={() => this.openModal('signUpModal')}
        
        />

        
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
