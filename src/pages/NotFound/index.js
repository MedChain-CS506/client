import React from 'react'

//MUI
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';

//Components
import { AppHeader } from '../../components/AppHeader'

const NotFound = () => {
    return (
        <div>
            <AppHeader />
            <Grid container justify='center'>
                <Grid item lg={6} xs={12}>
                    <Typography variant="h1">
                    404: The page you are looking for isn’t here
                    </Typography>
                    <Typography variant="subtitle2">
                        You either tried some shady route or you came here by mistake.
                        Whichever it is, try using the navigation
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default NotFound