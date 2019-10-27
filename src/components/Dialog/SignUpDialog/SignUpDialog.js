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
// import constraints from '../../../constraints';
import authentication from '../../../services/authentication'
import AuthProviderList from '../AuthProviderList';

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
    },

    authProvidersWideScreen: {
        paddingTop: 35
    }

});

const SignUpDialog = ({ dialogProps }) => {
    const classes = useStyles();

    //const [performingAction, setPerformingAction] = useState(false) //!added

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //const [passwordConfirmation, setPasswordConfirmation] = useState('')

    //const [errors, setErrors] = useState(null)

    //!NOT WORKING
    const signUp = () => {
        // const errors = validate({
        //     firstName: firstName,
        //     email: email,
        //     password: password,
        //     passwordConfirmation: passwordConfirmation
        // }, {
        //     firstName: constraints.firstName,
        //     email: constraints.email,
        //     password: constraints.password,
        //     passwordConfirmation: constraints.passwordConfirmation
        // })
 
        // if (errors) {
        //     setErrors(errors)
        // } else {
        //     setErrors(null), () => { 
        //         signUp(firstName, email, password, passwordConfirmation)
        //     }
        // }
        
        authentication.signUp({
            firstName: firstName,
            email: email,
            password: password
        }).then((value) => {
            dialogProps.onClose()
        })
    }

    const handleKeyPress = (event) => {
        if ( !firstName || !email || !password ) return;

        const key = event.key;
    
        if ( event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ) return;
          
        //!NOT WORKING
        if (key === 'Enter') {
            signUp();
        };
    }

    //resets back to initial state when user exits
    const handleExited = () => {
        setFirstName('')
        setEmail('')
        setPassword('')
        //setPasswordConfirmation('')
    };

    return (
        <Dialog fullWidth maxWidth="md" {...dialogProps} onKeyPress={handleKeyPress} onExited={handleExited}>
            <DialogTitle>
                Sign up for an account
            </DialogTitle>

            <Hidden smDown>
                <DialogContent className={classes.dialogContent}>
                    <Grid container direction="row">
                        <Grid className={classes.authProvidersWideScreen} item xs={3}>
                            <AuthProviderList
                                
                                // performingAction={performingAction}
                                // onAuthProviderClick={this.signInWithAuthProvider}
                            />
                        </Grid>

                        <Grid item xs={1}>
                            <Divider className={classes.divider} />
                        </Grid>

                        <Grid item xs={8}>
                            <Grid container spacing={4}>
                                <Grid item xs>
                                    <TextField
                                        autoComplete="given-name"
                                        fullWidth
                                        label="First name"
                                        placeholder="John"
                                        required
                                        type="text"
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={4}>
                                <Grid item xs>
                                    <TextField
                                        autoComplete="email"
                                        fullWidth
                                        label="E-mail address"
                                        placeholder="john@doe.com"
                                        required
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={4}>
                                <Grid item xs>
                                    <TextField
                                        autoComplete="new-password"
                                        fullWidth
                                        label="Password"
                                        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                        required
                                        type="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </Grid>
                            </Grid>

                            {/* <Grid container spacing={4}>
                                <Grid item xs>
                                    <TextField
                                        autoComplete="password"
                                        fullWidth
                                        label="Password confirmation"
                                        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                        required
                                        type="password"
                                        value={passwordConfirmation}
                                        onChange={e => setPasswordConfirmation(e.target.value)}
                                    />
                                </Grid>
                            </Grid> */}
                            
                        </Grid>
                    </Grid>
                </DialogContent>
            </Hidden>

            <Hidden mdUp>
                <DialogContent>
                    <AuthProviderList
                        gutterBottom
                        // performingAction={performingAction}
                        // onAuthProviderClick={this.signInWithAuthProvider}
                    />

                    <Grid container direction="column" spacing={2}>
                        <Grid item xs>
                            <TextField
                                autoComplete="given-name"
                                fullWidth
                                label="First name"
                                placeholder="John"
                                required
                                type="text"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs>
                            <TextField
                                autoComplete="email"
                                fullWidth
                                label="E-mail address"
                                placeholder="john@doe.com"
                                required
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs>
                            <TextField
                                autoComplete="new-password"
                                fullWidth
                                label="Password"
                                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                required
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Grid>

                        {/* <Grid item xs>
                            <TextField
                                autoComplete="password"
                                fullWidth
                                label="Password confirmation"
                                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                required
                                type="password"
                                value={passwordConfirmation}
                                onChange={e => setPasswordConfirmation(e.target.value)}
                            />
                        </Grid> */}
                    </Grid>
                </DialogContent>
            </Hidden>

            <DialogActions>
                <Button color='primary' onClick={dialogProps.onClose}>Cancel</Button>
                <Button color="primary" disabled={(!firstName ||!email || !password)} variant="contained" type="submit" onClick={signUp}>Sign Up</Button>
            </DialogActions>
        </Dialog>
    )
}

SignUpDialog.propTypes = {
    dialogProps: PropTypes.object.isRequired,
    //openSnackbar: PropTypes.func.isRequired
};

export default SignUpDialog
