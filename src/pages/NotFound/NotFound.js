import React from 'react'

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

//*MUI
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import FindIcon from '@material-ui/icons/FindInPage';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
    center: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    }, 

    emptyStateIcon: {
        fontSize: 50
    },
    
    button: {
        marginTop: 10
    },
    
    buttonIcon: {
        marginRight: 10
    }
});

const NotFound = () => {
    const classes = useStyles();

    return (
        <div className={classes.center}>
            <FindIcon className={classes.emptyStateIcon} color="action" />
            <Typography color="textSecondary" variant="h4">Content Not Found</Typography>
            <Typography color="textSecondary" variant="subtitle1">The requested URL was not found on this server</Typography>
            <Fab className={classes.button} color="secondary" component={Link} to="/" variant="extended">
                <HomeIcon className={classes.buttonIcon} /> Go Home
            </Fab>
        </div>
    )
}

NotFound.propTypes = {
    classes: PropTypes.object.isRequired
};

export default NotFound
