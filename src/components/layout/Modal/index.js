import React from 'react'

import SignUp from '../SignUp';
import SignIn from '../SignIn';

const index = ({ signedIn, modal }) => {

    const signUpModal = modal.signUpModal
    const signInModal = modal.signUpModal

    return (
        <>
            {!signedIn}
        </>
    )
}

index.defaultProps = {
    signedIn: false
}

export default index
