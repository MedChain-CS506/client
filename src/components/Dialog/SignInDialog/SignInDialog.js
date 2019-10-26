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

// import validate from 'validate.js';
// import constraints from '../../constraints';
import authentication from '../../../services/authentication';
// import AuthProviderList from '../AuthProviderList';

const useStyles = makeStyles({
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

const SignInDialog = ({ dialogProps }) => {
    const classes = useStyles();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = () => {

        //!NEED VERIFICATION HERE

        authentication.signIn({
            email: email,
            password: password
        })
    }

    const handleKeyPress = (event) => {
        if (!email || !password) return

        const key = event.key

        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return

        if (key === 'Enter') {
            signIn()
        }
    }

    //resets back to initial state when user exits
    const handleExited = () => {
        setEmail('')
        setPassword('')
    };

    return (
        <Dialog fullWidth maxWidth="sm" {...dialogProps} onKeyPress={handleKeyPress} onExited={handleExited}>
            <DialogTitle>
                Sign in to your account
            </DialogTitle>
            <DialogContent>
                <Hidden xsDown>
                    <Grid container direction="row">
                        <Grid item xs={4}>
                            <h1>[AUTH PROVIDERS]</h1>
                        </Grid>

                        <Grid item xs={1}>
                            <Divider className={classes.divider} />
                        </Grid>
                        
                        <Grid item xs={7}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item xs>
                                    <TextField
                                        autoComplete="email"
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
                    <h1>[AUTH PROVIDERS]</h1>   
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs>
                            <TextField
                                autoComplete="email"
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
