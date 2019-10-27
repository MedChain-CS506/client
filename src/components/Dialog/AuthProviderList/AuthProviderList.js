import React from 'react'

import PropTypes from 'prop-types';

//*MUI
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import GoogleIcon from 'mdi-material-ui/Google';
import FacebookBoxIcon from 'mdi-material-ui/FacebookBox';
import GitHubCircleIcon from 'mdi-material-ui/GithubCircle';

const useStyles = makeStyles({
    grid: {
        marginBottom: 2
    }
});

const AuthProviderList = ({ gutterBottom, performingAction, onAuthProviderClick }) => {

    const classes = useStyles();

    const authProviders = [
        {
          providerId: 'google.com',
          theme: createMuiTheme({
            palette: {
              primary: {
                main: '#4285f4',
                contrastText: '#ffffff'
              }
            }
          }),
          icon: <GoogleIcon />,
          name: 'Google'
        },
        {
          providerId: 'facebook.com',
          theme: createMuiTheme({
            palette: {
              primary: {
                main: '#3c5a99',
                contrastText: '#ffffff'
              }
            }
          }),
          icon: <FacebookBoxIcon />,
          name: 'Facebook'
        },
        {
          providerId: 'github.com',
          theme: createMuiTheme({
            palette: {
              primary: {
                main: '#24292e',
                contrastText: '#ffffff'
              }
            }
          }),
          icon: <GitHubCircleIcon />,
          name: 'GitHub'
        }
    ];

    //*gutterBottom meaning if there is margin in the bottom for larger screens
    if (gutterBottom) {
        return (
          <Grid className={classes.grid} container direction="column" spacing={1}>
            {authProviders.map((authProvider) => {
              return (
                <Grid key={authProvider.providerId} item>
                  <MuiThemeProvider theme={authProvider.theme}>
                    <Button
                      color="primary"
                      disabled={performingAction}
                      fullWidth
                      startIcon={authProvider.icon}
                      variant="contained"
                      onClick={() => onAuthProviderClick(authProvider.providerId)}
                    >
                      {authProvider.name}
                    </Button>
                  </MuiThemeProvider>
                </Grid>
              );
            })}
          </Grid>
        );
    }

    return (
      <Grid container direction="column" spacing={1}>
          {authProviders.map((authProvider) => {
            return (
                <Grid key={authProvider.providerId} item>
                    <MuiThemeProvider theme={authProvider.theme}>
                        <Button
                        color="primary"
                        disabled={performingAction}
                        fullWidth
                        startIcon={authProvider.icon}
                        variant="contained"
                        onClick={() => onAuthProviderClick(authProvider.providerId)}
                      >
                        {authProvider.name}
                      </Button>
                    </MuiThemeProvider>
                </Grid>
            );
          })}
      </Grid>
    )
}

AuthProviderList.defaultProps = {
    gutterBottom: false,
    performingAction: false
};  

AuthProviderList.propTypes = {  
    // Properties
    gutterBottom: PropTypes.bool,
    performingAction: PropTypes.bool,
  
    // Events
    onAuthProviderClick: PropTypes.func.isRequired
};

export default AuthProviderList