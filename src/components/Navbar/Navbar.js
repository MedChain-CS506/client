import React, { useState } from 'react'

import PropTypes from 'prop-types';

//*MUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #F00000 30%, #DC281E 90%)'
    }
});

const Navbar = ({ signedIn, performingAction, user, userData, onSignUpClick, onSignInClick, onSettingsClick, onSignOutClick }) => {
    const classes = useStyles();
    
    const [menu, setMenu]= useState({
        anchorEl: null
    })

    const getInitials = () => {
        const firstName = userData.firstName;
        const lastName = userData.lastName;
        const displayName = user.displayName;
    
        if (firstName && lastName) {
          return firstName.charAt(0) + lastName.charAt(0);
        } else if (firstName) {
          return firstName.charAt(0)
        } else if (lastName) {
          return lastName.charAt(0);
        } else if (displayName) {
          return displayName.charAt(0);
        } else {
          return 'NN';
        }
    };

    const handleSettingsClick = () => {
        setMenu({ anchorEl: null })
        onSettingsClick()
    }

    const handleSignOutClick = () => {
        setMenu({ anchorEl: null })
        onSignOutClick()
    }

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar variant="regular">
                <Box flexGrow={1}>
                    <Typography color="inherit" variant="h4">{process.env.REACT_APP_NAME}</Typography>
                </Box>

                {signedIn &&
                    <>
                        <IconButton color="inherit" disabled={performingAction} onClick={(event) => setMenu({ anchorEl: event.currentTarget })}>
                            {user.photoURL &&
                                <Avatar alt="Avatar" src={user.photoURL} />
                            }
                            {!user.photoURL &&
                                <Avatar alt="Avatar">
                                    {getInitials()}
                                </Avatar>
                            }
                        </IconButton>
        
                        <Menu anchorEl={menu.anchorEl} open={Boolean(menu.anchorEl)} onClose={() => setMenu({ anchorEl: null })}>
                            <MenuItem disabled={performingAction} onClick={handleSettingsClick}>Settings</MenuItem>
                            <MenuItem disabled={performingAction} onClick={handleSignOutClick}>Sign out</MenuItem>
                        </Menu>
                    </>
                }

                {!signedIn &&
                    <>
                        <Box mr={1}>
                            <Button color="secondary" disabled={performingAction} variant="contained" onClick={onSignUpClick}>Sign Up</Button>
                        </Box>
                            <Button color="secondary" disabled={performingAction} variant="contained" onClick={onSignInClick}>Sign In</Button>
                    </>
                }
            </Toolbar>
        </AppBar>
    )
}

Navbar.defaultProps = {
    performingAction: false,
    signedIn: false
};

Navbar.propTypes = {
    performingAction: PropTypes.bool.isRequired,
    signedIn: PropTypes.bool.isRequired,
    user: PropTypes.object,
    userData: PropTypes.object,

    onSettingsClick: PropTypes.func.isRequired,
    onSignOutClick: PropTypes.func.isRequired
};

export default Navbar;
