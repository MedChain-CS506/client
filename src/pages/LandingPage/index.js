import React from 'react'
import { withRouter } from 'react-router-dom'

//MUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton';
import LockIcon from '@material-ui/icons/Lock'

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

const index = () => {
    const { history } = this.props
    return (
        <div>
            <AppBar position='static'>
                <Toolbar disableGutters>
                    <Tooltip title='Sign In'>
                        <IconButton
                            name='signin'
                            color='inherit'
                            onClick={() => {
                                history.push('/signin')
                            }}
                            rel='noopener'
                        >
                            <LockIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(index)