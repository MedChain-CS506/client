import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// PAGES
import Landing from './pages/Landing'
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
