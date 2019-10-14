import React from 'react';
import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// COMPONENTS
import { AppHeader } from './components/AppHeader';

// PAGES
//import Landing from './pages/Landing'

function App() {
  return (
    <>
      <AppHeader />
      {/* <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
