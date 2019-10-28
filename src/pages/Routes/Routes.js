import React from 'react'

import PropTypes from 'prop-types';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//*PAGES
import Landing from '../Landing';
import NewPatientForm from '../NewPatientForm'
import PatientProfile from '../PatientProfile';
import NotFound from '../NotFound';

const Routes = ({ signedIn }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Landing signedIn={signedIn} /></Route>
                <Route exact path='/new-patient'><NewPatientForm signedIn={signedIn} /></Route>
                <Route exact path='/patient-profile'><PatientProfile signedIn={signedIn} /></Route>
                <Route><NotFound /></Route>
                <Redirect to="/not-found" />
          </Switch>
        </Router>
    )
}

Routes.defaultProps = {
    signedIn: false
};

Routes.propTypes = {
    signedIn: PropTypes.bool.isRequired
};

export default Routes
