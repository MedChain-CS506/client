//!Added when we want to add dark theme

// import React, { useState } from 'react';

// import PropTypes from 'prop-types';

// import DialogContent from '@material-ui/core/DialogContent';

// import Box from '@material-ui/core/Box';

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import Divider from '@material-ui/core/Divider';
// import Hidden from '@material-ui/core/Hidden';
// import Button from '@material-ui/core/Button';

// import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
// import InvertColorsIcon from '@material-ui/icons/InvertColors';
// import FormatColorResetIcon from '@material-ui/icons/FormatColorReset';

// import theming from '../../services/theming';

// const AppearanceTab = () => {
//   const [performingAction, setPerformingAction] = useState(false)

//   const handleTypeChange = (event) => {
//     if (!event) {
//       return;
//     }

//     const type = event.target.value;

//     if (!type) {
//       return;
//     }

//     const { theme } = this.props;

//     if (!theme) {
//       return;
//     }

//     if (theme.type.id === type) {
//       return;
//     }

//     setPerformingAction(true)

//     theming.changeTheme({
//       type: type
//     }).then((value) => {
//       this.props.openSnackbar('Changed type');
//     }).catch((reason) => {
//       const code = reason.code;
//       const message = reason.message;

//       switch (code) {
//         default:
//           this.props.openSnackbar(message);
//           return;
//       }
//     }).finally(() => {
//       setPerformingAction(true)
//     });
//   };

//   return (
//     <DialogContent>
//         <List disablePadding>
//           <Box mb={1}>
//             <ListItem>
//               <ListItemIcon>
//                 <InvertColorsIcon />
//               </ListItemIcon>

//               <FormControl disabled={performingAction} fullWidth>
//                 <InputLabel>Type</InputLabel>

//                 <Hidden smUp>
//                   <Select
//                     native
//                     value={theme.type.id}

//                     onChange={handleTypeChange()}>
//                     {Object.keys(theming.types).map((type) => {
//                       type = theming.types[type];

//                       return (
//                         <option key={type.id} value={type.id}>{type.name}</option>
//                       );
//                     })}
//                   </Select>
//                 </Hidden>

//                 <Hidden xsDown>
//                   <Select
//                     value={theme.type.id}

//                     onChange={handleTypeChange()}>
//                     {Object.keys(theming.types).map((type) => {
//                       type = theming.types[type];

//                       return (
//                         <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
//                       );
//                     })}
//                   </Select>
//                 </Hidden>
//               </FormControl>
//             </ListItem>
//           </Box>
//         </List>
//       </DialogContent>
//   )
// }

// AppearanceTab.propTypes = {
//   theme: PropTypes.object.isRequired,
//   openSnackbar: PropTypes.func.isRequired
// };

// export default AppearanceTab
