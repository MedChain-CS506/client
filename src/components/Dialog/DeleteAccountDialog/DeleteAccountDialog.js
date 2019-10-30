import React, { useState } from 'react'

import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const DeleteAccountDialog = ({ dialogProps, performingAction, userData, deleteAccount }) => {
    const [email, setEmail] = useState('')

    const handleKeyPress = (event) => {
        if (!email && userData) {
            return;
        }
    
        if (email !== userData.email) {
            return;
        }
    
        const key = event.key;
    
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
            return;
        }
    
        if (key === 'Enter') {
            deleteAccount();
        }
    }

    return (
        <Dialog {...dialogProps} onKeyPress={() => handleKeyPress()} onExited={() => setEmail('')}>
            <DialogTitle>
                Delete account?
            </DialogTitle>

            <DialogContent>
                <Box mb={3}>
                    <DialogContentText>
                        Deleted accounts can’t be recovered.
                        All data associated with your account will be deleted.
                    </DialogContentText>
                    <DialogContentText>
                        Type your email and <Hidden xsDown>click</Hidden><Hidden smUp>tap</Hidden> Delete to delete your account.
                        This action is irreversible.
                    </DialogContentText>
                </Box>

                <TextField
                    autoComplete="email"
                    disabled={performingAction}
                    fullWidth
                    label="Email"
                    placeholder={userData.email}
                    required
                    type="email"
                    value={email}
                    variant="outlined"
                    onChange={e => setEmail(e.target.value)}
                />
            </DialogContent>

            <DialogActions>
                <Button color="secondary" disabled={performingAction} onClick={dialogProps.onClose}>Cancel</Button>
                <Button color="secondary" disabled={performingAction || (email !== userData.email)} variant="contained" onClick={deleteAccount}>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}

DeleteAccountDialog.propTypes = {
  dialogProps: PropTypes.object.isRequired,
  performingAction: PropTypes.bool.isRequired,
  userData: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
}

export default DeleteAccountDialog
