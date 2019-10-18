import React, { Component } from 'react'

import PropTypes from 'prop-types';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//*PAGES
import HomeContent from './HomeContent';
import NotFound from './NotFound';

class Routes extends Component {
  render() {
    // Properties
    const { signedIn } = this.props;

    return (
      <Router>
        <Switch>
            <Route exact path="/"><HomeContent signedIn={signedIn} /></Route>
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
        </Switch>
      </Router>
    )
  }
}

Routes.defaultProps = {
  signedIn: false
};

Routes.propTypes = {
  signedIn: PropTypes.bool.isRequired
};

export default Routes;