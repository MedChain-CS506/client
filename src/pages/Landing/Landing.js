import React from 'react'

import PropTypes from 'prop-types';

//*Components
import Search from '../../components/Search'

//*MUI
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import GitHubCircleIcon from 'mdi-material-ui/GithubCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountPlus from 'mdi-material-ui/AccountPlus';

const useStyles = makeStyles({
    center: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    },

    icon: {
        marginTop: 10
    }
});

const Landing = ({signedIn}) => {
    const classes = useStyles();

    if (signedIn) {
        return (
            <div className={classes.center}>
                <HomeIcon color="action" />
                <Typography color="textSecondary" variant="h5">Home</Typography>
                <Search />
                <Fab className={classes.icon} color="secondary" variant="extended">
                    <AccountPlus /> Add New Patient
                </Fab>
            </div>
        );
    }

    return (
        <div className={classes.center}>
            <FavoriteIcon color="action" />
            <Typography color="textSecondary" variant="h3">{process.env.REACT_APP_NAME}</Typography>
            <Typography color="textSecondary" variant="subtitle1">The simple health file application</Typography>
            <Fab color="secondary" href="https://github.com/MedChain-CS506" rel="noopener noreferrer" target="_blank" variant="extended">
                <GitHubCircleIcon /> Repo
            </Fab>
        </div>
    )
}

Landing.defaultProps = {
    signedIn: false
};

Landing.propTypes = {
    signedIn: PropTypes.bool.isRequired
};

export default Landing
