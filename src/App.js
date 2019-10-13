import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound';

// MUI
import { Theme } from './Theme';
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
