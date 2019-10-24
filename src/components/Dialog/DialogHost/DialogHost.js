import React from 'react'

import PropTypes from 'prop-types';

import Hidden from '@material-ui/core/Hidden';

import SignUpDialog from '../SignUpDialog';
import SignInDialog from '../SignInDialog';

const DialogHost = ({ signedIn, dialogs }) => {

    const signUpDialog = dialogs.signUpDialog;
    const signInDialog = dialogs.signInDialog;

    return (
        <>
            <Hidden xsDown>
                {!signedIn &&
                    <>
                        <SignUpDialog
                            dialogProps={signUpDialog.dialogProps}
                        />
                        <SignInDialog
                            dialogProps={signInDialog.dialogProps}
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
                        />
                        <SignInDialog
                            dialogProps={{
                            fullScreen: true,

                            ...signInDialog.dialogProps
                            }}
                        />
                    </>
                }
            </Hidden>
        </>
    )
}

DialogHost.propTypes = {
    signedIn: PropTypes.bool.isRequired,
    dialogs: PropTypes.object.isRequired
};

export default DialogHost
