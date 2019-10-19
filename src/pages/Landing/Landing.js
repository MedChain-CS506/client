import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';

import HomeIcon from '@material-ui/icons/Home';

import GitHubCircleIcon from 'mdi-material-ui/GithubCircle';

import EmptyState from '../EmptyState';

class Landing extends Component {
    render() {
  
      // Properties
      const { signedIn } = this.props;
  
      if (signedIn) {
        return (
          <EmptyState
            icon={<HomeIcon color="action" />}
            title="Home"
          />
        );
      }
  
      return (
        <EmptyState
          title='MedChain'
          description="The robust health file application"
          button={
            <Fab color="secondary" href="https://github.com/MedChain-CS506" rel="noopener noreferrer" target="_blank" variant="extended">
              <GitHubCircleIcon />
                Repo
            </Fab>
          }
        />
      );
    }
  }

  Landing.defaultProps = {
    signedIn: false
  };

  Landing.propTypes = {
    // Properties
    signedIn: PropTypes.bool.isRequired
  };

export default Landing
