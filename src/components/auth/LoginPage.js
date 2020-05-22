import React, { useState } from 'react';
import Paper from '../Paper';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../../firebase';
import { useHistory } from 'react-router-dom';
import { useUidContext } from '../UidContext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));

const LoginPage = () => {
  let history = useHistory();
  const { authenticated } = useUidContext();
  if (authenticated) {
    history.push('/');
  }

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    setEmail('');
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
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
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
