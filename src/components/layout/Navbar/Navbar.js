import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: {
        anchorEl: null
      }
    };
  }

  getNameInitials = () => {
    const { user, userData } = this.props;

    const firstName = userData.firstName;
    const lastName = userData.lastName;
    const username = userData.username;
    const displayName = user.displayName;

    if (firstName && lastName) {
      return firstName.charAt(0) + lastName.charAt(0);
    } else if (firstName) {
      return firstName.charAt(0)
    } else if (lastName) {
      return lastName.charAt(0);
    } else if (username) {
      return username.charAt(0);
    } else if (displayName) {
      return displayName.charAt(0);
    } else {
      return 'NN';
    }
  };

  openMenu = (event) => {
    const anchorEl = event.currentTarget;

    this.setState({
      menu: {
        anchorEl
      }
    });
  };

  closeMenu = () => {
    this.setState({
      menu: {
        anchorEl: null
      }
    });
  };

  render() {
    // Properties
    const { performingAction, signedIn } = this.props;

    // Events
    const { onSignUpClick, onSignInClick } = this.props;

    const { menu } = this.state;

    return (
      <AppBar color="primary" position="static">
        <Toolbar variant="regular">
          <Box flexGrow={1}>
            <Typography color="inherit" variant="h6">Yo</Typography>
          </Box>

          {signedIn &&
            <>
              <IconButton color="inherit" disabled={performingAction} onClick={this.openMenu}>
                

            
              </IconButton>

              <Menu anchorEl={menu.anchorEl} open={Boolean(menu.anchorEl)} onClose={this.closeMenu}>
                <MenuItem disabled={performingAction} onClick={this.handleSettingsClick}>Settings</MenuItem>
                <MenuItem disabled={performingAction} onClick={this.handleSignOutClick}>Sign out</MenuItem>
              </Menu>
            </>
          }

          {!signedIn &&
            <>
              <Box mr={1}>
                <Button color="secondary" disabled={performingAction} variant="contained" onClick={onSignUpClick}>Sign Up</Button>
              </Box>

              <Button color="secondary" disabled={performingAction} variant="contained" onClick={onSignInClick}>Sign In</Button>
            </>
          }
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.defaultProps = {
  performingAction: false,
  signedIn: false
};

export default Navbar;


//
// import React, { setState } from 'react'
// import { Link } from 'react-router-dom'

// // MUI
// import { makeStyles, AppBar, Toolbar, Typography, Box, Button, IconButton } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

// const useStyles = makeStyles({
//     root: { flexGrow: 1 },
//     grow: { flexGrow: 1 },
//     menuButton: {
//       marginLeft: -12,
//       marginRight: 20
//     }
// });

// const Navbar = () => {
//     const { performingAction, signedIn } = this.props
//     const { onSignUpClick, onSignInClick } = this.props;
//     const classes = useStyles()
//     const [menu, setMenu] = setState({menu: { anchorEl: null }})

//     const openMenu = (e) => {
//         const anchorEl = e.currentTarget
//         setMenu({menu: { anchorEl }})
//     }

//     const closeMenu = () => {
//         setMenu({menu: { anchorEl: null }})
//     }

//     return (
//         <div className={classes.root}>
//             <AppBar position='fixed'>
//                 <Toolbar>
//                     {signedIn ?
//                         <>
//                             <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
//                                 <MenuIcon />
//                             </IconButton>
//                             <Typography className={classes.grow} color='inherit' varient='h6'>
//                                 <Link to='/'>MedChain</Link>
//                             </Typography>
//                             <IconButton color='inherit'>
//                                 <AccountCircle />
//                             </IconButton>
//                         </>
//                     :
//                         <>
//                             <Typography className={classes.grow} color='inherit' varient='h6'>
//                                 <Link to='/'>MedChain</Link>
//                             </Typography>
//                             <Box mr={2}>
//                                 <Button color='primary' disabled={performingAction} variant='contained' onClick={onSignUpClick}>Sign Up</Button>
//                             </Box>
//                             <Button color='primary' disabled={performingAction} variant='contained' onClick={onSignInClick}>Sign In</Button>
//                         </>
//                     }
//                 </Toolbar>
//             </AppBar>
//         </div>
//     )
// }

// Navbar.defaultProps = {
//     performingAction: false,
//     signedIn: false
// }

// export default Navbar