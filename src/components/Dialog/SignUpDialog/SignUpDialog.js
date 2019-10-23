import React, { useState } from 'react'

import PropTypes from 'prop-types';

//*MUI
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    dialogContent: {
        overflowY: 'hidden'
    },
    
    icon: {
        marginRight: 0.5
    },
    
    divider: {
        margin: 'auto',
        width: 0.125,
        height: '100%'
    },
    
    grid: {
        marginBottom: 2
    }
});

const SignUpDialog = ({ fullScreen, open, onClose }) => {
    const classes = useStyles();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    // const signUp = (emailAddress, password, passwordConfirmation) => {

    // };

    // const handleKeyPress = (event) => {
    //     const key = event.key;
    
    //     if ( event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ) {
    //       return;
    //     }
    
    //     if (key === 'Enter') {
    //       this.signUp();
    //     }
    // };

    // const handleSignUpClick = () => {
    //     this.signUp();
    // };

    return (
        <Dialog fullScreen={fullScreen} open={open} onClose={onClose}>
            <DialogTitle>
                Sign up for an account
            </DialogTitle>

            <DialogContent>
                <form>
                    <TextField
                        autoComplete="email"
                        fullWidth
                        label="E-mail address"
                        margin="normal"
                        onChange={e => setEmail(e.target.value)}
                        required
                        type="email"
                        value={email}
                    />

                    <TextField
                        autoComplete="new-password"
                        fullWidth
                        label="Password"
                        margin="normal"
                        onChange={e => setPassword(e.target.value)}
                        required
                        type="password"
                        value={password}
                    />

                    <TextField
                        autoComplete="password"
                        fullWidth
                        label="Password confirmation"
                        margin="normal"
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        required
                        type="password"
                        value={passwordConfirmation}
                    />
                </form>
            </DialogContent>

            <DialogActions>
                <Button color='primary' onClick={onClose}>Cancel</Button>
                <Button color="primary" disabled={(!email || !password || !passwordConfirmation)} variant="contained" onClick={() => console.log('handleSignUpClick')}>Sign Up</Button>
            </DialogActions>

        </Dialog>
    )
}

SignUpDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    dialogProps: PropTypes.object.isRequired,
    fullScreen: PropTypes.bool,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default SignUpDialog
