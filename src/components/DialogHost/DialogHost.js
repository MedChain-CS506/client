import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Hidden from '@material-ui/core/Hidden';

import SignUpDialog from '../../pages/SignUpDialog';
import SignInDialog from '../../pages/SignInDialog';

class DialogHost extends Component {
  render() {
    // Properties
    const {
      signedIn,
      dialogs
    } = this.props;

    const signUpDialog = dialogs.signUpDialog;
    const signInDialog = dialogs.signInDialog;

    return (
      <>
        <Hidden xsDown>
          {!signedIn &&
            <>
              <SignUpDialog
                dialogProps={signUpDialog.dialogProps}

                {...signUpDialog.props}
              />
              <SignInDialog
                dialogProps={signInDialog.dialogProps}

                {...signInDialog.props}
              />
            </>
          }
        </Hidden>

        <Hidden smUp>
          {!signedIn &&
            <>
              <SignUpDialog
                dialogProps={{
                  fullScreen: true,

                  ...signUpDialog.dialogProps
                }}

                {...signUpDialog.props}
              />

              <SignInDialog
                dialogProps={{
                  fullScreen: true,
                  ...signInDialog.dialogProps
                }}

                {...signInDialog.props}
              />
            </>
          }
        </Hidden>
      </>
    );
  }
}

DialogHost.defaultProps = {
  signedIn: false
};

DialogHost.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  dialogs: PropTypes.object.isRequired
};

export default DialogHost;