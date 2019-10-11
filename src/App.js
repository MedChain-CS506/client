import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div>
      <Landing />
      <Dashboard />
    </div>
  );
}

export default App;
