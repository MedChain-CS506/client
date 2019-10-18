import React, { Component } from 'react'

import PropTypes from 'prop-types';

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//*PAGES
import Dashboard from './Dashboard';
import HomeContent from './HomeContent';
import NotFound from './NotFound';

class Router extends Component {
  render() {
    // Properties
    const { signedIn } = this.props;

    return (
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomeContent} />
            <Route exact path="/dashboard" render={() => (<Dashboard signedIn={this.props.signedIn} />)} />
            {/* <Route exact path="/dashboard" component={Dashboard} /> */}
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    )
  }
}

Router.defaultProps = {
  signedIn: false
};

Router.propTypes = {
  signedIn: PropTypes.bool.isRequired
};

export default Router;