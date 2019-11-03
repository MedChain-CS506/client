import React from 'react'

import PropTypes from 'prop-types';

//*Components
import Search from '../../components/Search'
import PatientTable from '../../components/PatientTable'

//*MUI
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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

const Landing = ({ signedIn = false }) => {
    const classes = useStyles();

    if (signedIn) {
        return (
            <>  
                <Link to='/patient-form'>
                    <Fab className={classes.addNewPatientIcon} color="secondary" variant="extended">
                        <AddCircleIcon className={classes.buttonIcon} /> Add New Patient
                    </Fab>
                </Link>
                <Search />
                <PatientTable />
            </>
        );
    }

    return (
        <div className={classes.center}>
            <FavoriteIcon color="action" />
            <Typography color="textSecondary" variant="h3">{process.env.REACT_APP_NAME}</Typography>
            <Typography color="textSecondary" variant="subtitle1">The simple health file application</Typography>
            <Fab className={classes.button} color="secondary" href="https://github.com/MedChain-CS506" rel="noopener noreferrer" target="_blank" variant="extended">
                <GitHubIcon className={classes.buttonIcon} /> Repo
            </Fab>
        </div>
    )
}

Landing.propTypes = {
    signedIn: PropTypes.bool.isRequired
};

export default Landing
