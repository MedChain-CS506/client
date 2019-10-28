import React, { useState, useEffect } from 'react'

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

import AuthProviderList from '../AuthProviderList';
// import validate from 'validate.js';
// import constraints from '../../../constraints';
import authentication from '../../../services/authentication'

const useStyles = makeStyles({
    dialogContent: {
        overflowY: 'hidden'
    },
    
    icon: {
        marginRight: 0.5
    },
    
    divider: {
        margin: 'auto'
    },
    
    grid: {
        marginBottom: 2
    }
});

const SignUpDialog = ({ dialogProps }) => {
    const classes = useStyles();

    const [performingAction, setPerformingAction] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    //const [errors, setErrors] = useState(null)

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
            lastName: lastName,
            userName: userName,
            email: email,
            password: password
        }).then((value) => {
            dialogProps.onClose()
        }).catch((reason) => {

        }).finally(() => setPerformingAction(false))
    }

    // useEffect(() => {
    //     authentication
    // }, [performingAction])

    const signInWithAuthProvider = (providerId) => {
        console.log('hello')
        // setPerformingAction(true), () => {
        //     authentication.signInWithAuthProvider(providerId).then((value) => {
        //         dialogPropsProps.onClose(() => {
        //             const user = value.user;
        //             // const displayName = user.displayName;
        //             // const emailAddress = user.email;
        //         })
        //     })
        // }
    }

    const handleKeyPress = (event) => {
        if ( !firstName || !lastName || !userName || !email || !password || !passwordConfirmation ) return;

        const key = event.key;
    
        if ( event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ) return;
          
        if (key === 'Enter') {
            signUp();
        };
    }

    const handleExited = () => {
        setFirstName('')
        setLastName('')
        setUserName('')
        setEmail('')
        setPassword('')
        setPasswordConfirmation('')
    };

    return (
        <Dialog fullWidth maxWidth="md" {...dialogProps} onKeyPress={handleKeyPress} onExited={handleExited}>
            <DialogTitle>
                Sign up for an account
            </DialogTitle>

            <Hidden smDown>
                <DialogContent className={classes.dialogContent}>
                    <Grid container direction="row">
                        <Grid item xs={3}>
                            <AuthProviderList
                                performingAction={performingAction}
                                onAuthProviderClick={() => signInWithAuthProvider()}
                            />
                        </Grid>

                        <Grid item xs={1}>
                            <Divider className={classes.divider} orientation="vertical" />
                        </Grid>

                        <Grid item xs={8}>
                            <Grid container spacing={4}>
                                <Grid item xs>
                                    <TextField
                                        autoComplete="given-name"
                                        disabled={performingAction}
                                        fullWidth
                                        label="First name"
                                        placeholder="John"
                                        required
                                        type="text"
                                        value={firstName}
                                        variant="outlined"
                                        onChange={e => setFirstName(e.target.value)}
                                    />
                                </Grid>

                                <Grid item xs>
                                    <TextField
                                        autoComplete="family-name"
                                        disabled={performingAction}
                                        fullWidth
                                        label="Last name"
                                        placeholder="Doe"
                                        required
                                        type="text"
                                        value={lastName}
                                        variant="outlined"
                                        onChange={e => setLastName(e.target.value)}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={4}>
                                <Grid item xs>
                                    <TextField
                                        autoComplete="username"
                                        disabled={performingAction}
                                        // error={!!(errors && errors.username)}
                                        fullWidth
                                        // helperText={(errors && errors.username) ? errors.username[0] : ''}
                                        label="Username"
                                        placeholder="John"
                                        required
                                        type="text"
                                        value={userName}
                                        variant="outlined"
                                        onChange={e => setUserName(e.target.value)}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={4}>
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
                            </Grid>

                            <Grid container spacing={4}>
                                <Grid item xs>
                                    <TextField
                                        autoComplete="new-password"
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

                            <Grid container spacing={4}>
                                <Grid item xs>
                                    <TextField
                                        autoComplete="password"
                                        disabled={performingAction}
                                        fullWidth
                                        label="Password confirmation"
                                        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                        required
                                        type="password"
                                        value={passwordConfirmation}
                                        variant="outlined"
                                        onChange={e => setPasswordConfirmation(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Hidden>

            <Hidden mdUp>
                <DialogContent>
                    <AuthProviderList
                        gutterBottom
                        performingAction={performingAction}
                        onAuthProviderClick={() => signInWithAuthProvider()}
                    />

                    <Grid container direction="column" spacing={2}>
                        <Grid item xs>
                            <TextField
                                autoComplete="given-name"
                                disabled={performingAction}
                                fullWidth
                                label="First name"
                                placeholder="John"
                                required
                                type="text"
                                value={firstName}
                                variant="outlined"
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs>
                            <TextField
                                autoComplete="family-name"
                                disabled={performingAction}
                                //error={!!(errors && errors.lastName)}
                                fullWidth
                                //helperText={(errors && errors.lastName) ? errors.lastName[0] : ''}
                                label="Last name"
                                placeholder="Doe"
                                required
                                type="text"
                                value={lastName}
                                variant="outlined"
                                onChange={e => setLastName(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs>
                            <TextField
                                autoComplete="username"
                                disabled={performingAction}
                                // error={!!(errors && errors.username)}
                                fullWidth
                                // helperText={(errors && errors.username) ? errors.username[0] : ''}
                                label="Username"
                                placeholder="John"
                                required
                                type="text"
                                value={userName}
                                variant="outlined"
                                onChange={e => setUserName(e.target.value)}
                            />
                        </Grid>

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
                                autoComplete="new-password"
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

                        <Grid item xs>
                            <TextField
                                autoComplete="password"
                                disabled={performingAction}
                                fullWidth
                                label="Password confirmation"
                                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                required
                                type="password"
                                value={passwordConfirmation}
                                variant="outlined"
                                onChange={e => setPasswordConfirmation(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
            </Hidden>

            <DialogActions>
                <Button color='primary' onClick={dialogProps.onClose}>Cancel</Button>
                <Button color="primary" disabled={(!firstName || !lastName || !userName || !email || !password || !passwordConfirmation || performingAction)} variant="contained" onClick={signUp}>Sign Up</Button>
            </DialogActions>
        </Dialog>
    )
}

SignUpDialog.propTypes = {
    dialogProps: PropTypes.object.isRequired,
    //openSnackbar: PropTypes.func.isRequired
};

export default SignUpDialog
