import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom' //! This is a HoC which allows us to get access to the history

//PAGES

//MUI


const LandingPage = () => {
    return (
        <div>
            <h1>Landing Page</h1>
        </div>
    )
}

export default withRouter (LandingPage)