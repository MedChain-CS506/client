import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Hidden from '@material-ui/core/Hidden';

import SignUpDialog from '../../pages/SignUpDialog';

class DialogHost extends Component {
  render() {
    // Properties
    const {
      signedIn,
      dialog
    } = this.props;

    const signUpDialog = dialog.signUpDialog;

    return (
      <>
        <Hidden xsDown>
          {!signedIn &&
            <>
              <SignUpDialog
                dialogProps={signUpDialog.dialogProps}

                {...signUpDialog.props}
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