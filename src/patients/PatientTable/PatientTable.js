import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },

    tableWrapper: {
        overflow: 'auto',
    }
});

const PatientTable = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper className={classes.root}>
                    <div className={classes.tableWrapper}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    COL LABEL
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        Table Cell
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}

{/* <Card className={classes.card}>
    <CardContent>
        <Typography align='center' gutterBottom variant="h5" component="h2">
            Patient Name
        </Typography>
        <Typography align='center' variant="body2" color="textSecondary" component="p">
            Aadhaar #
        </Typography>
    </CardContent>
    <CardActions style={{justifyContent: 'center'}}>
        <Button variant="contained" size="small" color="primary">
            <Link to='/patient-profile'>
                Select
            </Link>
        </Button>
    </CardActions>
</Card> */}


export default PatientTable
