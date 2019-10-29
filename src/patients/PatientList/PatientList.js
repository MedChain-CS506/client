import React from 'react'
import PatientCard from '../PatientCard';

//*MUI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    patientGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1rem'
    }
});

const PatientList = () => {
    const classes = useStyles();

    return (
        <div className={classes.patientGrid}>
            <PatientCard />
            <PatientCard />
            <PatientCard />
            <PatientCard />
            <PatientCard />
            <PatientCard />
        </div>
    )
}

export default PatientList
