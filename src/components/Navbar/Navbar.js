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

const Navbar = ({ signedIn, onSignUpClick, onSignInClick }) => {
    const [anchorEl, setAnchorEl]= useState(null)

    const classes = useStyles();

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar variant="regular">
                <Box flexGrow={1}>
                    <Typography color="inherit" variant="h4">{process.env.REACT_APP_NAME}</Typography>
                </Box>

                {signedIn &&
                    <>
                        <IconButton color="inherit">
                            <Avatar alt="Avatar"  />
                        </IconButton>
        
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                            <MenuItem>Settings</MenuItem>
                            <MenuItem>Sign out</MenuItem>
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
    signedIn: PropTypes.bool.isRequired
};

export default Navbar;
