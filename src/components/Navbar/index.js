import React from 'react'

// MUI
import { makeStyles, AppBar, Toolbar, Typography, Tooltip, IconButton } from '@material-ui/core'

const useStyles = makeStyles({
    root: { flexGrow: 1 },
    grow: { flexGrow: 1 },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
});

const Navbar = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.root}>
            <AppBar color position='static'>
                <Toolbar>
                    <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.grow} color='inherit' varient='h6'>
                        MedChain
                    </Typography>
                    <IconButton color='inherit'>
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

Navbar.defaultProps = {
    signedIn: false
}

export default Navbar
