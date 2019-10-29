import React, { useState } from 'react';

import PropTypes from 'prop-types';

//*MUI
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import Tabs from '@material-ui/core/Tabs';

import Hidden from '@material-ui/core/Hidden';

import CloseIcon from '@material-ui/icons/Close';

import MainTab from '../../../tabs/MainTab'

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


const SettingsDialog = ({ dialogProps }) => {
    const classes = useStyles();

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
          <Tabs
            classes={{ root: classes.tabs }}
            style={{ overflow: 'initial', minHeight: 'initial' }}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth">
              <MainTab />
          </Tabs>
        </Hidden>
      
        <Hidden smUp>
          <Tabs
            classes={{ root: classes.tabs }}
            style={{ overflow: 'initial', minHeight: 'initial' }}
            indicatorColor="primary"
            scrollButtons="off"
            textColor="primary"
            variant="scrollable">
            <MainTab />
          </Tabs>
        </Hidden>
      </Dialog>
    )
}

SettingsDialog.propTypes = {
  dialogProps: PropTypes.object.isRequired,
};

export default SettingsDialog
