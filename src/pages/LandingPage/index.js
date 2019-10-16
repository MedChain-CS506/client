import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom' //! This is a HoC, which allows us to get access to the history

//PAGES
import Dashboard from './Dashboard'

//MUI
import { makeStyles, AppBar, Toolbar, Tooltip, IconButton } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock'
import { classes } from 'istanbul-lib-coverage';

const styles = theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column'
    },
    root: {
        flexGrow: 1,
        flex: '1 0 100%'
    },
    hero: {
        height: '100%',
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        height: '100%',
    }
})

const index = ({ history, theme }) => {
    const { signedIn } = this.props

    useEffect(() => {
        if (signedIn) {
          history.push('/signin')
        }
    })

    return (
        <div className={classes.root}>
            
        </div>
    )
}

export default withRouter (index)