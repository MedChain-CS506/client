import React, { Component } from 'react';

import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class Navbar extends Component {

  render() {
    // Properties
    const { performingAction, signedIn } = this.props;
    // const { user } = this.props;

    // Events
    const { onSignUpClick, onSignInClick } = this.props;

    // const { menu } = this.state;

    return (
      <AppBar color="secondary" position="static">
        <Toolbar variant="regular">
          <Box flexGrow={1}>
            <Typography color="inherit" variant="h6">MedChain</Typography>
          </Box>

          {signedIn &&
            <>
              {/* when they are signed in */}
            </>
          }

          {!signedIn &&
            <>
              <Box mr={1}>
                <Button disabled={performingAction} variant="contained" onClick={onSignUpClick}>Sign Up</Button>
              </Box>

              <Button disabled={performingAction} variant="contained" onClick={onSignInClick}>Sign In</Button>
            </>
          }
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.defaultProps = {
  performingAction: false,
  signedIn: false
};

Navbar.propTypes = {
  // Properties
  performingAction: PropTypes.bool.isRequired,
  signedIn: PropTypes.bool.isRequired,
  user: PropTypes.object,
  userData: PropTypes.object,
};

export default Navbar;