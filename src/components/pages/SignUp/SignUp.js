import React, { useState } from 'react'

//*COMPONENTS
import AuthProviderList from '../../layout/Modal/AuthProviderList';

//*MUI
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    modalContent: {
        overflowY: 'hidden'
    },

    divider: {
        margin: 'auto'
    },
});

const SignUp = () => {
    const [performingAction] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const classes = useStyles();

    // const handleKeyPress = (e) => {
    //     const {
    //       firstName,
    //       lastName,
    //       username,
    //       emailAddress,
    //       emailAddressConfirmation,
    //       password,
    //       passwordConfirmation
    //     } = this.state;
    
    //     if (!firstName ||
    //       !lastName ||
    //       !username ||
    //       !emailAddress ||
    //       !emailAddressConfirmation ||
    //       !password ||
    //       !passwordConfirmation) {
    //       return;
    //     }
    
    //     const key = e.key;
    
    //     if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
    //       return;
    //     }
    
    //     if (key === 'Enter') {
    //       this.signUp();
    //     }
    //   };

    return (
        <Dialog fullWidth maxWidth='md' onKeyPress={() => console.log('hello')} onExit={() => console.log('hello')}>
            <DialogTitle>
                Sign up for an account
            </DialogTitle>   

            <Hidden smDown>
                <DialogContent className={classes.modalContent}>
                    <Grid container direction="row">
                        <Grid item xs={3}>
                            <AuthProviderList
                                performingAction={performingAction}

                                // this.signInWithAuthProvider
                                onAuthProviderClick={() => console.log('hello')}
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
                                        onChange={(e) => setFirstName(e.target.value)}
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
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Grid>
                        </Grid>

                        <Grid container spacing={4}>
                            <Grid item xs>
                                <TextField
                                    autoComplete="username"
                                    disabled={performingAction}
                                    fullWidth
                                    label="username"
                                    placeholder="John"
                                    required
                                    type="text"
                                    value={userName}
                                    variant="outlined"
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={4}>
                            <Grid item xs>
                                <TextField
                                    autoComplete="email"
                                    disabled={performingAction}
                                    fullWidth
                                    label="email"
                                    placeholder="john@doe.com"
                                    required
                                    type="email"
                                    value={email}
                                    variant="outlined"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs>
                                <TextField
                                    autoComplete="email"
                                    disabled={performingAction}
                                    fullWidth
                                    label="email confirmation"
                                    placeholder="john@doe.com"
                                    required
                                    type="email"
                                    value={confirmEmail}
                                    variant="outlined"
                                    onChange={(e) => setConfirmEmail(e.target.value)}
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
                                    onChange={(e) => setPassword(e.target.value)}
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
                                    value={confirmPassword}
                                    variant="outlined"  
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Hidden>

            <Hidden mdUp>
                <DialogContent>
                    {/* <AuthProviderList
                    gutterBottom
                    performingAction={performingAction}

                    onAuthProviderClick={this.signInWithAuthProvider}
                    /> */}

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
                            onChange={(e) => setFirstName(e.target.value)}
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
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs>
                        <TextField
                            autoComplete="username"
                            disabled={performingAction}
                            fullWidth
                            label="username"
                            placeholder="John"
                            required
                            type="text"
                            value={userName}
                            variant="outlined"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs>
                        <TextField
                            autoComplete="email"
                            disabled={performingAction}
                            fullWidth
                            label="email"
                            placeholder="john@doe.com"
                            required
                            type="email"
                            value={email}
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs>
                        <TextField
                            autoComplete="email"
                            disabled={performingAction}
                            fullWidth
                            label="email confirmation"
                            placeholder="john@doe.com"
                            required
                            type="email"
                            value={confirmEmail}
                            variant="outlined"
                            onChange={(e) => setConfirmEmail(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
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
                            value={confirmPassword}
                            variant="outlined"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Grid>
                    </Grid>
                </DialogContent>
                </Hidden>

                <DialogActions>
                    <Button color="primary">Cancel</Button>

                    <Button
                        color="primary"
                        disabled={
                            !firstName ||
                            !lastName ||
                            !userName ||
                            !email ||
                            !confirmEmail ||
                            !password ||
                            !confirmPassword ||
                            performingAction
                        }
                        variant="contained"

                        onClick={() => console.log('hello')}>
                            {/* ^ this.signUp */}
                        Sign up
                    </Button>
                    </DialogActions>
        </Dialog>
    )
}

export default SignUp