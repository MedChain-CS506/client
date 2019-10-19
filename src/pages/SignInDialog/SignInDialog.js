import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

class SignInDialog extends Component {
    constructor(props) {
      super(props);
  
      
    }

    render() {
        const { dialogProps } = this.props;
        return (
            <Dialog fullWidth maxWidth="sm" {...dialogProps} onKeyPress={this.handleKeyPress} onExited={this.handleExited}>
                <DialogTitle>
                Sign in to your account
                </DialogTitle>

                <DialogContent>
                <Hidden xsDown>
                    <Grid container direction="row">
                    <Grid item xs={4}>
                        {/* <AuthProviderList
                        performingAction={performingAction}

                        onAuthProviderClick={this.signInWithAuthProvider}
                        /> */}
                    </Grid>

                    {/* <Grid item xs={1}>
                        <Divider className={classes.divider} orientation="vertical" />
                    </Grid> */}

                    <Grid item xs={7}>
                        <Grid container direction="column" spacing={2}>
                        <Grid item xs>
                            <TextField
                            autoComplete="email"
                            //   disabled={performingAction}
                            //   error={!!(errors && errors.emailAddress)}
                            fullWidth
                            // helperText={(errors && errors.emailAddress) ? errors.emailAddress[0] : ''}
                            label="E-mail address"
                            placeholder="john@doe.com"
                            required
                            type="email"
                            //value={emailAddress}
                            variant="outlined"

                            //   onChange={this.handleEmailAddressChange}
                            />
                        </Grid>

                        <Grid item xs>
                            <TextField
                            autoComplete="current-password"
                            //   disabled={performingAction}
                            //   error={!!(errors && errors.password)}
                            fullWidth
                            //helperText={(errors && errors.password) ? errors.password[0] : ''}
                            label="Password"
                            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                            required
                            type="password"
                            //value={password}
                            variant="outlined"

                            onChange={this.handlePasswordChange}
                            />
                        </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                </Hidden>

                <Hidden smUp>
                    {/* <AuthProviderList
                    gutterBottom
                    performingAction={performingAction}

                    onAuthProviderClick={this.signInWithAuthProvider}
                    /> */}

                    <Grid container direction="column" spacing={2}>
                    <Grid item xs>
                        <TextField
                        autoComplete="email"
                        //   disabled={performingAction}
                        //   error={!!(errors && errors.emailAddress)}
                        fullWidth
                        //helperText={(errors && errors.emailAddress) ? errors.emailAddress[0] : ''}
                        label="E-mail address"
                        placeholder="john@doe.com"
                        required
                        type="email"
                        //   value={emailAddress}
                        variant="outlined"

                        onChange={this.handleEmailAddressChange}
                        />
                    </Grid>

                    <Grid item xs>
                        <TextField
                        autoComplete="current-password"
                        //   disabled={performingAction}
                        //   error={!!(errors && errors.password)}
                        fullWidth
                        // helperText={(errors && errors.password) ? errors.password[0] : ''}
                        label="Password"
                        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                        required
                        type="password"
                        //   value={password}
                        variant="outlined"

                        onChange={this.handlePasswordChange}
                        />
                    </Grid>
                    </Grid>
                </Hidden>
                </DialogContent>

                <DialogActions>
                <Button color="primary">Cancel</Button>

                <Button
                    color="primary"
                    // disabled={!emailAddress || performingAction}
                    variant="outlined"

                    onClick={this.resetPassword}>
                    Reset password
                </Button>

                <Button
                    color="primary"
                    // disabled={(!emailAddress || !password) || performingAction}
                    variant="contained"

                    onClick={this.signIn}>
                    Sign in
                </Button>
                </DialogActions>
            </Dialog>

        )
    }
}

SignInDialog.propTypes = {
    // Styling
    classes: PropTypes.object.isRequired,
  
    // Dialog Properties
    dialogProps: PropTypes.object.isRequired,

};

export default SignInDialog
