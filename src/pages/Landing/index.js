import React from 'react'

//MUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

//COMPONENTS
import { AppHeader } from '../../components/AppHeader'

// const useStyles = makeStyles(theme => ({
//     main: {
//         display: 'flex',
//         flexDirection: 'column'
//     },
//     root: {
//         flexGrow: 1, //? redundant
//         flex: '1 0 100%'
//     },
//     hero: {
//         height: '100%',
//         flex: '0 0 auto',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// }));

const index = () => {
    //const classes = useStyles();

    return (
        <div>
            <AppHeader />
        </div>
    )
}

export default index