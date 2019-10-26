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

const Navbar = ({ user, userData, signedIn, onSignUpClick, onSignInClick, onSettingsClick, onSignOutClick }) => { //!ADDED onSettingsClick and onSignOutClick
    const classes = useStyles();
    
    const [menu, setMenu]= useState({
        anchorEl: null
    })

    // const openMenu = (event) => { //TODO: refactor... only one element is ever using this
    //     setMenu({ anchorEl: event.currentTarget })
    // }

    const handleSettingsClick = () => {
        setMenu({ anchorEl: null })
        
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
                        <IconButton color="inherit" onClick={(event) => setMenu({ anchorEl: event.currentTarget })}>
                            <Avatar alt="Avatar"  />
                        </IconButton>
        
                        <Menu anchorEl={menu.anchorEl} open={Boolean(menu.anchorEl)} onClose={() => setMenu({ anchorEl: null })}>
                            <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
                            <MenuItem onClick={handleSignOutClick}>Sign out</MenuItem>
                        </Menu>
                    </>
                }

                {!signedIn &&
                    <>
                        <Box mr={1}>
                            <Button className={classes.signUpButton} color="secondary" variant="contained" onClick={onSignUpClick}>Sign Up</Button>
                            <Button color="secondary" variant="contained" onClick={onSignInClick}>Sign In</Button>
                        </Box>
                    </>
                }
            </Toolbar>
        </AppBar>
    )
}

Navbar.defaultProps = {
    signedIn: false
};

Navbar.propTypes = {
    signedIn: PropTypes.bool.isRequired,
    onSettingsClick: PropTypes.func.isRequired,
    onSignOutClick: PropTypes.func.isRequired
};

export default Navbar;
