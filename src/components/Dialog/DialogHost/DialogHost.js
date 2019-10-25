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
    )
}

DialogHost.propTypes = {
    signedIn: PropTypes.bool.isRequired,
    dialogs: PropTypes.object.isRequired
};

export default DialogHost
