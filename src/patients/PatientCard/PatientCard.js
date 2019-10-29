import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
      maxWidth: 345
    },

    media: {
      height: 140,
    }
});

const PatientCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'}
                title="Profile"
            />
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
        </Card>
    )
}

export default PatientCard
