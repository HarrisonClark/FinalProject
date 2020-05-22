import React, { useState } from 'react';
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

  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/user/:${username}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const content = (
    <form align="center" className={classes.root}>
      <TextField
        required
        id="outlined-required"
        label="Username"
        variant="outlined"
        onChange={(e) => {
          setuserName(e.target.value);
        }}
      />
      <TextField
        required
        id="outlined-required"
        label="Password"
        variant="outlined"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button onSubmit={handleSubmit} variant="contained" color="primary">
        Sign In
      </Button>
    </form>
  );

  return <Paper content={content}></Paper>;
};

export default LoginPage;
