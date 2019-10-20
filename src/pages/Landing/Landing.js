import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';

import HomeIcon from '@material-ui/icons/Home';

import GitHubCircleIcon from 'mdi-material-ui/GithubCircle';

import MainContent from '../MainContent';

import FavoriteIcon from '@material-ui/icons/Favorite';

class Landing extends Component {
    render() {
  
      // Properties
      const { signedIn } = this.props;
  
      if (signedIn) {
        return (
          <MainContent
            icon={<HomeIcon color="action" />}
            title="Home"
          />
        );
      }
  
      return (
        <MainContent
          icon={<FavoriteIcon color="action" />}
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
