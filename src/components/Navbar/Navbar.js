import React, { useState } from 'react'

import PropTypes from 'prop-types';

//*MUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #F00000 30%, #DC281E 90%)'
    },

    signUpButton: {
        marginRight: 10
    }
});

const Navbar = ({ signedIn, performingAction, user, userData, onSignUpClick, onSignInClick, onSettingsClick, onSignOutClick }) => { //!ADDED onSettingsClick and onSignOutClick
    const classes = useStyles();
    
    const [menu, setMenu]= useState({
        anchorEl: null
    })

    const getNameInitials = () => {
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

    // const openMenu = (event) => { //TODO: refactor... only one element is ever using this
    //     setMenu({ anchorEl: event.currentTarget })
    // }

    // const closeMenu = () => { //TODO: refactor... only one element is ever using this
    //     setMenu({ anchorEl: null })
    // }

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
                            <Avatar alt="Avatar"  />
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
                            <Button className={classes.signUpButton} color="secondary" disabled={performingAction} variant="contained" onClick={onSignUpClick}>Sign Up</Button>
                            <Button color="secondary" disabled={performingAction} variant="contained" onClick={onSignInClick}>Sign In</Button>
                        </Box>
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
    // user: PropTypes.object,
    // userData: PropTypes.object,

    onSettingsClick: PropTypes.func.isRequired,
    onSignOutClick: PropTypes.func.isRequired
};

export default Navbar;
