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

    return (
        <Dialog fullWidth maxWidth="sm" {...dialogProps}>
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
                                        variant="outlined"
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
                                variant="outlined"
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
                            />
                        </Grid>
                    </Grid>
                </Hidden>
            </DialogContent>

            <DialogActions>
                <Button color="primary" onClick={dialogProps.onClose}>Cancel</Button>
                <Button color="primary" disabled={(!email || !password)} variant="contained" onClick={() => console.log('handleSignInClick')}>Sign in</Button>
            </DialogActions>
        </Dialog>
    )
}

SignInDialog.propTypes = {
    dialogProps: PropTypes.object.isRequired
};

export default SignInDialog
