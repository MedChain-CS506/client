import React from 'react'

import SignUp from '../../pages/SignUp';
import SignIn from '../../pages/SignIn';

import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

const Modal = ({ signedIn, modal }) => {
    const signUpModal = modal.signUpModal
    const signInModal = modal.signInModal

    return (
        <>
            <Hidden xsDown>
                {!signedIn &&
                    <>
                        <SignUp
                            modalProps={signUpModal.modalProps}
                            {...signUpModal.props}
                        />
                        <SignIn  
                            modalProps={signInModal.modalProps}
                            {...signInModal.props}
                        />
                    </>
                }
            </Hidden>
            <Hidden smUp>
                {!signedIn &&
                    <>
                    <SignUp
                        modalProps={{ fullScreen: true, ...signUpModal.modalProps }}
                        {...signUpModal.props}
                    />

                    <SignIn
                        modalProps={{ fullScreen: true, ...signInModal.dialogProps }}

                        {...signInModal.props}
                    />
                    </>
                }
            </Hidden>
        </>
    )
}

Modal.defaultProps = {
    signedIn: false
}

export default Modal