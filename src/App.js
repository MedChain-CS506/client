import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//COMPONENTS
import Navbar from './components/Navbar'

//PAGES
// import LandingPage from './pages/LandingPage'
// import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'
// import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound';

//MUI
import { ThemeProvider } from '@material-ui/core/styles'; 
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router>
        <Switch>
          {/* <Route exact path='/' component={LandingPage} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/dashboard' component={Dashboard} /> */}
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
