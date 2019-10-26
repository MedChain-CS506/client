import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';

import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PaletteIcon from '@material-ui/icons/Palette';
import LinkIcon from '@material-ui/icons/Link';
import SecurityIcon from '@material-ui/icons/Security';

import SwipeableViews from 'react-swipeable-views';

// import AccountTab from '../AccountTab';
// import AppearanceTab from '../AppearanceTab';
// import LinksTab from '../LinksTab';
// import SecurityTab from '../SecurityTab';

const useStyles = makeStyles({
    closeButton: {
      position: 'absolute',
      right: 1,
      top: 1
    },
  
    tabs: {
      display: 'initial'
    }
});

const tabs = [
    {
      key: 'account',
      icon: <AccountCircleIcon />,
      label: 'Account'
    },
  
    {
      key: 'appearance',
      icon: <PaletteIcon />,
      label: 'Appearance'
    },
  
    {
      key: 'links',
      icon: <LinkIcon />,
      label: 'Links'
    },
  
    {
      key: 'security',
      icon: <SecurityIcon />,
      label: 'Security'
    }
];

const SettingsDialog = ({ dialogProps }) => {
    const classes = useStyles();

    const [selectedTab, setSelectedTab] = useState(0)

    return (
      <Dialog {...dialogProps}>
        <DialogTitle disableTypography>
          <Typography variant="h6">
            Settings
          </Typography>

          <Tooltip title="Close">
            <IconButton className={classes.closeButton} onClick={dialogProps.onClose}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </DialogTitle>

        <Hidden xsDown>

        </Hidden>

        <Hidden smUp>

        </Hidden>

        <SwipeableViews>

        </SwipeableViews>
        
      </Dialog>
    )
}

SettingsDialog.propTypes = {
  dialogProps: PropTypes.object.isRequired,
};

export default SettingsDialog