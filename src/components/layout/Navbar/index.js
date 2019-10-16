import React from 'react'
import { Link } from 'react-router-dom'

// MUI
import { makeStyles, AppBar, Toolbar, Typography, Box, Button, IconButton, Avatar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles({
    root: { flexGrow: 1 },
    grow: { flexGrow: 1 },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
});

const Navbar = ({ onSignUpClick, onSignInClick, signedIn }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position='fixed'>
                <Toolbar>
                    {signedIn ?
                        <>
                            <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
                                <MenuIcon />
                            </IconButton>
                            <Typography className={classes.grow} color='inherit' varient='h6'>
                                <Link to='/'>MedChain</Link>
                            </Typography>
                            <IconButton color='inherit'>
                                <AccountCircle />
                            </IconButton>
                        </>
                    :
                        <>
                            <Typography className={classes.grow} color='inherit' varient='h6'>
                                <Link to='/'>MedChain</Link>
                            </Typography>
                            <Box mr={2}>
                                <Button color='primary' variant='contained' onClick={onSignUpClick}>Sign Up</Button>
                            </Box>
                            <Button color='primary' variant='contained' onClick={onSignInClick}>Sign In</Button>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

Navbar.defaultProps = {
    signedIn: false
}

export default Navbar
