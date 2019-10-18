import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';

import FindIcon from '@material-ui/icons/FindInPage';
import HomeIcon from '@material-ui/icons/Home';

import EmptyState from '../EmptyState';

const styles = (theme) => ({
  emptyStateIcon: {
    fontSize: theme.spacing(12)
  },

  button: {
    marginTop: theme.spacing(1)
  },

  buttonIcon: {
    marginRight: theme.spacing(1)
  }
});

class NotFound extends Component {
    render() {
    // Styling
    const { classes } = this.props;

    return (
        <EmptyState
            icon={<FindIcon className={classes.emptyStateIcon} color="action" />}
            title="Content Not Found"
            description="The requested URL was not found on this server"
            button={
                <Fab className={classes.button} color="secondary" component={Link} to="/" variant="extended">
                    <HomeIcon className={classes.buttonIcon} /> Go Home
                </Fab>
            }
            />
        );
    }
}
  
NotFound.propTypes = {
// Styling
classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(NotFound);

// const NotFound = () => {
//     //const { classes } = this.props;
//     return (
//         <div>
//             <Grid container justify='center'>
//                 <Grid item lg={6} xs={12}>
//                     <Typography variant="h1">
//                     404: The page you are looking for isn’t here
//                     </Typography>
//                     <Typography variant="subtitle2">
//                         You either tried some shady route or you came here by mistake.
//                         Whichever it is, try using the navigation
//                     </Typography>
//                 </Grid>
//             </Grid>
//         </div>
//     )
// }

// export default NotFound