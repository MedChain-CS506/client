import React, { setState } from 'react'
import { Link } from 'react-router-dom'

// MUI
import { makeStyles, AppBar, Toolbar, Typography, Box, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    root: { flexGrow: 1 },
    grow: { flexGrow: 1 },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
});

const Navbar = ({ performingAction, signedIn, onSignUpClick, onSignInClick }) => {
    const classes = useStyles()
    const [menu, setMenu] = setState({menu: { anchorEl: null }})

    const openMenu = (e) => {
        const anchorEl = e.currentTarget
        setMenu({menu: { anchorEl }})
    }

    const closeMenu = () => {
        setMenu({menu: { anchorEl: null }})
    }

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
                                <Button color='primary' disabled={performingAction} variant='contained' onClick={onSignUpClick}>Sign Up</Button>
                            </Box>
                            <Button color='primary' disabled={performingAction} variant='contained' onClick={onSignInClick}>Sign In</Button>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

Navbar.defaultProps = {
    performingAction: false,
    signedIn: false
}

export default Navbar