import React from 'react';
import Paper from '../Paper';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  const content = (
    <form align="center" className={classes.root}>
      <TextField
        required
        id="outlined-required"
        label="Username"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Password"
        variant="outlined"
      />
      <Button variant="contained" color="primary">
        Sign In
      </Button>
    </form>
  );

  return <Paper content={content}></Paper>;
};

export default LoginPage;
