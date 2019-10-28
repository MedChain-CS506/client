import React from 'react'

import PropTypes from 'prop-types';

//*MUI
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

const useStyles = makeStyles({
    noTitlePadding: {
        paddingTop: 3
    }
});

const SignOutDialog = ({ dialogProps, title, contentText, dismissiveAction, confirmingAction, acknowledgementAction }) => {
    const classes = useStyles();

    return (
        <Dialog {...dialogProps}>
            {title &&
                <DialogTitle>{title}</DialogTitle>
            }

            <DialogContent className={title ? null : classes.noTitlePadding}>
                <DialogContentText>
                    {contentText}
                </DialogContentText>
            </DialogContent>

            {(dismissiveAction || confirmingAction || acknowledgementAction) &&
                <DialogActions>
                    {dismissiveAction}
                    {confirmingAction}
                    {acknowledgementAction}
                </DialogActions>
            }
        </Dialog>
    )
}

SignOutDialog.propTypes = {
    // Dialog Properties
    dialogProps: PropTypes.object.isRequired,
  
    // Custom Properties
    title: PropTypes.string,
    contentText: PropTypes.string.isRequired,
    dismissiveAction: PropTypes.element,
    confirmingAction: PropTypes.element,
    acknowledgementAction: PropTypes.element,
};

export default SignOutDialog
