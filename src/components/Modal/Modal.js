import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Hidden from '@material-ui/core/Hidden';

import SignUpModal from '../../pages/SignUpModal';
// import SignInDialog from '../SignInDialog';
// import SettingsDialog from '../SettingsDialog';
// import AlertDialog from '../AlertDialog';

class Modal extends Component {
  render() {
    // Properties
    const {
      signedIn,
      dialogs
    } = this.props;

    const signUpModal = dialogs.signUpModal;
    // const signInDialog = dialogs.signInDialog;
    // const settingsDialog = dialogs.settingsDialog;
    // const signOutDialog = dialogs.signOutDialog;

    return (
      <>
        <Hidden xsDown>
          {!signedIn &&
            <>
              <SignUpModal
                dialogProps={signUpModal.dialogProps}

                {...signUpModal.props}
              />

              {/* <SignInDialog
                dialogProps={signInDialog.dialogProps}

                {...signInDialog.props}
              /> */}
            </>
          }
        </Hidden>

        {/* <Hidden smDown>
          {signedIn &&
            <SettingsDialog
              dialogProps={settingsDialog.dialogProps}

              {...settingsDialog.props}
            />
          }
        </Hidden> */}

        <Hidden smUp>
          {!signedIn &&
            <>
              <SignUpModal
                dialogProps={{
                  fullScreen: true,

                  ...signUpModal.dialogProps
                }}

                {...signUpModal.props}
              />

              {/* <SignInDialog
                dialogProps={{
                  fullScreen: true,

                  ...signInDialog.dialogProps
                }}

                {...signInDialog.props}
              /> */}
            </>
          }
        </Hidden>

        {/* <Hidden mdUp>
          {signedIn &&
            <SettingsDialog
              dialogProps={{
                fullScreen: true,

                ...settingsDialog.dialogProps
              }}

              {...settingsDialog.props}
            />
          }
        </Hidden> */}

        {/* {signedIn &&
          <>
            <AlertDialog
              dialogProps={signOutDialog.dialogProps}

              {...signOutDialog.props}
            />
          </>
        } */}
      </>
    );
  }
}

Modal.defaultProps = {
  signedIn: false
};

Modal.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  dialogs: PropTypes.object.isRequired
};

export default Modal;