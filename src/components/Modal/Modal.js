import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Hidden from '@material-ui/core/Hidden';

import SignUpModal from '../../pages/SignUpModal';

class Modal extends Component {
  render() {
    // Properties
    const {
      signedIn,
      modals
    } = this.props;

    const signUpModal = modals.signUpModal;

    return (
      <>
        <Hidden xsDown>
          {!signedIn &&
            <>
              <SignUpModal
                modalProps={signUpModal.modalProps}

                {...signUpModal.props}
              />
            </>
          }
        </Hidden>

        <Hidden smUp>
          {!signedIn &&
            <>
              <SignUpModal
                modalProps={{
                  fullScreen: true,

                  ...signUpModal.modalProps
                }}

                {...signUpModal.props}
              />
            </>
          }
        </Hidden>
      </>
    );
  }
}

Modal.defaultProps = {
  signedIn: false
};

Modal.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  modals: PropTypes.object.isRequired
};

export default Modal;