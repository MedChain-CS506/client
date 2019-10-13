import React from 'react'

//MUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column'
    },
    root: {
        flexGrow: 1, //? redundant
        flex: '1 0 100%'
    },
    hero: {
        height: '100%',
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const Landing = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Sign Up</Button>
                </Toolbar>
            </AppBar>

            <div className={classes.root}></div>
        </div>
    )
}

export default Landing
