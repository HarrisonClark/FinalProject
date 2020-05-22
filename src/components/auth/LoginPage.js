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

    console.log(username);
    fetch(`/api/user/:${username}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
    setuserName('');
    setPassword('');
  };

  const content = (
    <form
      style={{ direction: 'flex-container' }}
      align="center"
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <Button type="submit" variant="contained" color="primary" size="small">
          Sign In
        </Button>
      </div>
    </form>
  );

  return <Paper content={content}></Paper>;
};

export default LoginPage;
