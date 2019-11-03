import _ from 'lodash';

import { createMuiTheme } from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

import firebase, { auth, firestore } from '../firebase';



// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF0000',
      light: '#E7F6E7',
      contrastText: '#FFFFFF'
    },
    secondary: {
        main: '#ffffff'
    }
  },
});


const colors = {
  red: {
    id: 'red',
    name: 'Red',
    import: red
  },

  grey: {
    id: 'grey',
    name: 'Grey',
    import: grey
  }
}

const types = {
  light: {
    id: 'light',
    name: 'Light'
  },

  dark: {
    id: 'dark',
    name: 'Dark'
  }
};

// const getColor = (colorId) => {
//   if (!colorId) {
//     return null;
//   }

//   colorId = _.camelCase(colorId);

//   return colors[colorId];
// };

// const getType = (typeId) => {
//   if (!typeId) {
//     return null;
//   }

//   return types[typeId];
// };

// const defaultPrimaryColor = getColor(process.env.REACT_APP_THEME_PRIMARY_COLOR);
// const defaultSecondaryColor = getColor(process.env.REACT_APP_THEME_SECONDARY_COLOR);
// const defaultType = getType(process.env.REACT_APP_THEME_TYPE);

// const defaultTheme = createMuiTheme({
//   palette: {
//     primary: defaultPrimaryColor.import,
//     secondary: defaultSecondaryColor.import,
//     type: defaultType.id
//   },

//   primaryColor: defaultPrimaryColor,
//   secondaryColor: defaultSecondaryColor,
//   type: defaultType
// });

// const theming = {};

// theming.colors = colors;
// theming.types = types;

// theming.defaultPrimaryColor = defaultPrimaryColor;
// theming.defaultSecondaryColor = defaultSecondaryColor;
// theming.defaultType = defaultType;

// theming.defaultTheme = defaultTheme;




// /**
//  * Returns whether a theme is the default theme.
//  * @param theme
//  * @returns {boolean}
//  */
// theming.isDefaultTheme = (theme) => {
//   if (!theme) {
//     return false;
//   }

//   if (theme.primaryColor.id === defaultPrimaryColor.id &&
//       theme.secondaryColor.id === defaultSecondaryColor.id &&
//       theme.type.id === defaultType.id) {
//     return true;
//   }

//   return false;
// };


// /**
//  * Creates a Material-UI theme from a JSON theme object.
//  * @param theme
//  * @returns {null|Theme}
//  */
// theming.createTheme = (theme) => {
//   if (!theme) {
//     return null;
//   }

//   let primaryColor = theme.primaryColor;
//   let secondaryColor = theme.secondaryColor;
//   let type = theme.type;

//   if (!primaryColor || !secondaryColor || !type) {
//     return null;
//   }

//   primaryColor = getColor(primaryColor);
//   secondaryColor = getColor(secondaryColor);
//   type = getType(type);

//   if (!primaryColor || !secondaryColor || !type) {
//     return null;
//   }

//   theme = createMuiTheme({
//     palette: {
//       primary: primaryColor.import,
//       secondary: secondaryColor.import,
//       type: type.id
//     },

//     primaryColor: primaryColor,
//     secondaryColor: secondaryColor,
//     type: type
//   });

//   return theme;
// };





// /**
//  * Changes the theme for the current user.
//  * @param theme
//  * @returns {Promise<unknown>}
//  */
// theming.changeTheme = (theme) => {
//   return new Promise((resolve, reject) => {
//     if (!theme) {
//       reject();

//       return;
//     }

//     let primaryColor = theme.primaryColor;
//     let secondaryColor = theme.secondaryColor;
//     let type = theme.type;

//     if (!primaryColor || !secondaryColor || !type) {
//       reject();

//       return;
//     }

//     primaryColor = getColor(primaryColor);
//     secondaryColor = getColor(secondaryColor);
//     type = getType(type);

//     if (!primaryColor || !secondaryColor || !type) {
//       reject();

//       return;
//     }

//     const currentUser = auth.currentUser;

//     if (!currentUser) {
//       reject();

//       return;
//     }

//     const uid = currentUser.uid;

//     if (!uid) {
//       reject();

//       return;
//     }

//     const reference = firestore.collection('users').doc(uid);

//     if (!reference) {
//       reject();

//       return;
//     }

//     reference.update({
//       theme: {
//         primaryColor: primaryColor.id,
//         secondaryColor: secondaryColor.id,
//         type: type.id
//       }
//     }).then((value) => {
//       analytics.logEvent('change_theme', {
//         value: {
//           primaryColor: primaryColor.id,
//           secondaryColor: secondaryColor.id,
//           type: type.id
//         }
//       });

//       resolve(value);
//     }).catch((reason) => {
//       reject(reason);
//     });
//   });
// };




// /**
//  * Changes the type for the current user.
//  * @param type
//  * @returns {Promise<unknown>}
//  */
// theming.changeType = (type) => {
//   return new Promise((resolve, reject) => {
//     if (!type) {
//       reject();

//       return;
//     }

//     type = getType(type);

//     if (!type) {
//       reject();

//       return;
//     }

//     const currentUser = auth.currentUser;

//     if (!currentUser) {
//       reject();

//       return;
//     }

//     const uid = currentUser.uid;

//     if (!uid) {
//       reject();

//       return;
//     }

//     const reference = firestore.collection('users').doc(uid);

//     if (!reference) {
//       reject();

//       return;
//     }

//     reference.update({
//       'theme.type': type.id
//     }).then((value) => {

//       resolve(value);
//     }).catch((reason) => {
//       reject(reason);
//     });
//   });
// };



export default theme;