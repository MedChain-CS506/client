import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';

//PAGES

//MUI

const LandingPage = () => {
    return (
        <div>
            <Grid container justify='center'>
                <Grid item lg={6} xs={12}>
                    <Typography variant="h1">
                        Landing Page
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingPage