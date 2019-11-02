import React, { useState } from 'react'

import PropTypes from 'prop-types';

//*MUI
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import validate from 'validate.js';
import constraints from '../../../constraints';
import authentication from '../../../services/authentication';

const SignInDialog = ({ dialogProps,...props }) => {
    const [performingAction, setPerformingAction] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState(null)

    const signIn = () => {
        const signInErrors = validate({
            email: email,
            password: password
          }, {
            email: constraints.email,
            password: constraints.password
        })

        if (signInErrors) {
            setErrors(signInErrors)
        } else {
            setPerformingAction(true)
            setErrors(null)
            authentication.signIn(email, password).then((value) => {  
                dialogProps.onClose()
                const user = value.user;
                const email = user.email;
                props.openSnackbar(`Signed in as ${email}`);

            }).catch((reason) => {
                const code = reason.code;
                const message = reason.message;

                switch (code) {
                    case 'auth/invalid-email':
                    case 'auth/user-not-found':
                    case 'auth/wrong-password':
                        props.openSnackbar(message);
                        return;

                    default:
                        props.openSnackbar(message);
                        return;
                    }
            }).finally(() => setPerformingAction(false))
        }
    }

    const handleKeyPress = (event) => {
        if (!email || !password) return

        const key = event.key

        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return

        if (key === 'Enter') {
            signIn()
        }
    }

    const handleExited = () => {
        setEmail('')
        setPassword('')
        setPerformingAction(false)
    };

    return (
        <Dialog fullWidth maxWidth="sm" {...dialogProps} onKeyPress={handleKeyPress} onExited={handleExited}>
            <DialogTitle>
                Sign in to your account
            </DialogTitle>

            <DialogContent>
                <Hidden xsDown>
                    <Grid container direction="row">         
                        <Grid item xs={12}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item xs>
                                    <TextField
                                        autoComplete="email"
                                        disabled={performingAction}
                                        fullWidth
                                        label="E-mail address"
                                        placeholder="john@doe.com"
                                        required
                                        type="email"
                                        value={email}
                                        variant="outlined"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <TextField
                                        autoComplete="current-password"
                                        disabled={performingAction}
                                        fullWidth
                                        label="Password"
                                        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                        required
                                        type="password"
                                        value={password}
                                        variant="outlined"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Hidden>

                <Hidden smUp>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs>
                            <TextField
                                autoComplete="email"
                                disabled={performingAction}
                                fullWidth
                                label="E-mail address"
                                placeholder="john@doe.com"
                                required
                                type="email"
                                value={email}
                                variant="outlined"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                autoComplete="current-password"
                                disabled={performingAction}
                                fullWidth
                                label="Password"
                                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                required
                                type="password"
                                value={password}
                                variant="outlined"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Hidden>
            </DialogContent>

            <DialogActions>
                <Button color="primary" onClick={dialogProps.onClose}>Cancel</Button>
                <Button color="primary" disabled={(!email || !password)} variant="contained" onClick={signIn}>Sign in</Button>
            </DialogActions>
        </Dialog>
    )
}

SignInDialog.propTypes = {
    dialogProps: PropTypes.object.isRequired
};

export default SignInDialog
