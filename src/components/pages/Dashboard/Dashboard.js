//Here, Dashboard renders both when you sign in and are not signed in... Need to move this logic of not being
// signed in into the landing page.

import React from 'react';
//import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
//import HomeIcon from '@material-ui/icons/Home';
import GitHubCircleIcon from 'mdi-material-ui/GithubCircle';
import EmptyPage from '../EmptyPage';

// const styles = (theme) => ({
//     emptyStateIcon: {
//       fontSize: theme.spacing(12)
//     },

//     button: {
//         marginTop: theme.spacing(1)
//     },
    
//     buttonIcon: {
//     marginRight: theme.spacing(1)
//     }
// });

const useStyles = makeStyles({
    emptyStateIcon: {
        fontSize: 12
    },

    button: {
        marginTop: 1
    },
    
    buttonIcon: {
        marginRight: 1
    }
});

const Dashboard = () => {
    const classes = useStyles();
    return (
        <EmptyPage
            title='MedChain'
            description="A simple, yet well-built blockchain application"
            button={
                <Fab className={classes.button} color="primary" href="https://github.com/MedChain-CS506" rel="noopener noreferrer" target="_blank" variant="extended">
                    <GitHubCircleIcon className={classes.buttonIcon} />
                    GitHub
                </Fab>
            }
      />
    )
}

export default Dashboard;
//export default withStyles(styles)(Dashboard);
