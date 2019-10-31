import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      m: 'auto'
    }
});

const PatientProfile = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography variant='h2'>Patient Name</Typography>
                    <Typography variant='h5'>Aadhaar #</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h6'>Date of Birth</Typography>
                    <Typography variant='h6'>Sex</Typography>
                    <Typography variant='h6'>Weight</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant='h5'>Known Allergies</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant='h5'>Prescriptions</Typography> 
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant='h5'>Recent Activity - Upcoming Appointments, Medical Operations</Typography> 
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default PatientProfile
