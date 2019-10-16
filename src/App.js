import React from 'react';
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

  const openModel = () => {
    return console.log('hello')
  }

  return (
    <ThemeProvider theme={theme}>

      <Router>
        <Navbar 
          onSignUpClick={() => this.openModel('signUpDialog')}
          onSignInClick={() => this.openModel('signUpDialog')}
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
