import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// PAGES
import Landing from './pages/Landing'
import NotFound from './pages/NotFound';

//MUI
import { ThemeProvider } from '@material-ui/core/styles'; 
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
