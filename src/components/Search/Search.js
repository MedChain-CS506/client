import React from 'react'

//*MUI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '2px 2px',
    margin: '10px 10px',
  },

  input: {
    marginLeft: 5,
  },

  button: {
    backgroundColor: 'red',
    color: 'white'
  }
});

const Search = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>
            <InputBase
              className={classes.input}
              fullWidth
              placeholder="Search Patients..."
              inputProps={{ 'aria-label': 'search patients' }}
            />
          </Paper>
        </Grid>
      
        <Grid item xs={12}>
          <Paper>
            <Button className={classes.button} variant="extended" fullWidth>
              Search
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Search
