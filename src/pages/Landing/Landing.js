import React from 'react'

import PropTypes from 'prop-types';

//*Components
import Search from '../../components/Search'

import PatientList from '../../patients/PatientList'

//*MUI
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import GitHubCircleIcon from 'mdi-material-ui/GithubCircle';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountPlus from 'mdi-material-ui/AccountPlus';

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    center: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    },

    iconSpacing: {
        fontSize: 50
    },

    button: {
        marginTop: 10
    },

    addNewPatientIcon: {
        marginBottom: 10 
    },

    buttonIcon: {
        marginRight: 10
    }
});

const Landing = ({ signedIn }) => {
    const classes = useStyles();

    if (signedIn) {
        return (
            <>  
                <Link to='/patient-form'>
                    <Fab className={classes.addNewPatientIcon} color="secondary" variant="extended">
                        <AccountPlus className={classes.buttonIcon} /> Add New Patient
                    </Fab>
                </Link>
                <Search />
                <PatientList />
            </>
        );
    }

    return (
        <div className={classes.center}>
            <FavoriteIcon color="action" />
            <Typography color="textSecondary" variant="h3">{process.env.REACT_APP_NAME}</Typography>
            <Typography color="textSecondary" variant="subtitle1">The simple health file application</Typography>
            <Fab className={classes.button} color="secondary" href="https://github.com/MedChain-CS506" rel="noopener noreferrer" target="_blank" variant="extended">
                <GitHubCircleIcon className={classes.buttonIcon} /> Repo
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
