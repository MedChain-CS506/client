import React from 'react'

//import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// const styles = {
//     center: {
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       textAlign: 'center'
//     }
// };

const useStyles = makeStyles({
    center: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    }
});

const EmptyPage = ({ icon, title, description, button }) => {
    const classes = useStyles();
    // const { icon, title, description, button } = this.props;
    return (
        <div className={classes.center}>
            {icon}
            {title && <Typography color="textSecondary" variant="h4">{title}</Typography>}
            {description && <Typography color="textSecondary" variant="subtitle1">{description}</Typography>}
            {button}
        </div>
    )
}

export default EmptyPage;
//  export default withStyles(styles)(EmptyPage);