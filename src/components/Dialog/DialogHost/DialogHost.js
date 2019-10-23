//ATTEMPTING TO MOVE ALL DIALOGS OVER HERE.

// import React from 'react'

// import PropTypes from 'prop-types';

// import Hidden from '@material-ui/core/Hidden';

// import SignUpDialog from '../SignUpDialog';

// const DialogHost = ({ signedIn, dialogs }) => {

//     const signUpDialog = dialogs.signUpDialog;

//     return (
//         <>
//             <Hidden xsDown>
//                 {!signedIn &&
//                     <>
//                         <SignUpDialog
//                             dialogProps={signUpDialog.dialogProps}

//                             //{...signUpDialog.props}
//                         />
//                     </>
//                 }
//             </Hidden>

//             <Hidden smUp>
//                 {!signedIn &&
//                     <>
//                         <SignUpDialog
//                             dialogProps={{
//                                 fullScreen: true,
//                                 ...signUpDialog.dialogProps
//                             }}

//                             //{...signUpDialog.props}
//                         />
//                     </>
//                 }
//             </Hidden>
//         </>
//     )
// }

// DialogHost.propTypes = {
//     signedIn: PropTypes.bool.isRequired,
//     dialogs: PropTypes.object.isRequired
//   };

// export default DialogHost
