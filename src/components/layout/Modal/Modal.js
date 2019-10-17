import React from 'react'

//*COMPONENTS
import SignUp from '../../pages/SignUp';
//import SignIn from '../../pages/SignIn';

//*MUI
import Hidden from '@material-ui/core/Hidden';
//import { Grid, Button, Divider, TextField } from '@material-ui/core/Grid';

const Modal = ({ signedIn, modals }) => {
    const signUpModal = modals.signUpModal

    return (
        <>
            <Hidden xsDown>
                {!signedIn &&
                    <>
                        <SignUp
                            modalProps={signUpModal.modalProps}
                            {...signUpModal.props}
                        />
                        {/* <SignIn  
                            modalProps={signInModal.modalProps}
                            {...signInModal.props}
                        /> */}
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

                    {/* <SignIn
                        modalProps={{ fullScreen: true, ...signInModal.modalProps }}

                        {...signInModal.props}
                    /> */}
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