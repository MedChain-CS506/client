import React, { useState } from 'react'

import PropTypes from 'prop-types';

import validate from 'validate.js';

import constraints from '../../../constraints';

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

import firebase from '../../../firebase' //!FIREBASE

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

const SignUpDialog = ({ dialogProps }) => {
    const classes = useStyles();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    //const [errors, setErrors] = useState(null)

    // const signUp = (emailAddress, password, passwordConfirmation) => {


    //     const errors = validate({
    //         email: email,
    //         password: password,
    //         passwordConfirmation: passwordConfirmation
    //     }, {
    //         email: email,
    //         password: password,
    //         passwordConfirmation: passwordConfirmation
    //     })
    
    //     if (errors) {
    //         setErrors(errors)
    //     } else {
    //         setErrors(null), () => {
    //           props.signUp (
    //             email,
    //             password,
    //             passwordConfirmation
    //           );
    //         });
    //       }
        
    // }

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
        <Dialog fullWidth maxWidth="md" {...dialogProps} onKeyPress={console.log('handleKeyPress')} onExited={console.log('handleExited')} onSubmit={e => e.preventDefault()}>
            <DialogTitle>
                Sign up for an account
            </DialogTitle>

            <DialogContent className={classes.dialogContent}>
                <Hidden smDown>
                    <Grid container direction="row">
                        <Grid item xs={3}>
                            <h1>[AUTH PROVIDERS]</h1>
                        </Grid>

                        <Grid item xs={1}>
                            <Divider className={classes.divider} />
                        </Grid>

                        <Grid item xs={8}>
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

                            <Grid container spacing={4}>
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
                            </Grid>
                            
                        </Grid>

                    </Grid>
                </Hidden>

                <Hidden mdUp>
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
                    </Grid>
                </Hidden>
            </DialogContent>
            <DialogActions>
                <Button color='primary' onClick={dialogProps.onClose}>Cancel</Button>
                {/* <Button color="primary" disabled={(!email || !password || !passwordConfirmation)} variant="contained" onClick={() => console.log('handleSignUpClick')}>Sign Up</Button> */}
                <Button color="primary" disabled={(!email || !password || !passwordConfirmation)} variant="contained" type="submit" onClick={onRegister}>Register</Button>
            </DialogActions>
        </Dialog>
    )

    async function onRegister() {
		try {
			await firebase.register(email, password, passwordConfirmation)
			//props.history.replace('/landing')
		} catch(error) {
			alert(error.message)
		}
	}
}

SignUpDialog.propTypes = {
    dialogProps: PropTypes.object.isRequired
};

export default SignUpDialog
