import React, { Component } from 'react';

import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const Navbar = ({ signedIn, onSignUpClick, onSignInClick}) => {
  return (
      <AppBar color="primary" position="static">
          <Toolbar variant="regular">
              <Box flexGrow={1}>
                  <Typography color="inherit" variant="h6">MedChain</Typography>
              </Box>

              {!signedIn &&
                  <>
                      <Box mr={1}>
                          <Button color="secondary" variant="contained" onClick={onSignUpClick}>Sign Up</Button>
                      </Box>

                      <Button color="secondary" variant="contained" onClick={onSignInClick}>Sign In</Button>
                  </>
              }
          </Toolbar>
      </AppBar>
  )
}

Navbar.defaultProps = {
  signedIn: false
};

Navbar.propTypes = {
  signedIn: PropTypes.bool.isRequired
};

export default Navbar