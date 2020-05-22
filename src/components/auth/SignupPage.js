import React, { useState } from 'react';
import Paper from '../Paper';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../../firebase';
import { useUidContext } from '../UidContext';
const db = firebase.firestore();

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));

const SignupPage = () => {
  const classes = useStyles();

  const { uid } = useUidContext();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMIT');
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        if (uid) {
          db.collection('users').doc(uid).set({ username });
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
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
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          label="username"
          variant="outlined"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <TextField
          required
          size="small"
          id="outlined-required"
          type="password"
          label="Password"
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </div>
      <div>
        <Button type="submit" variant="contained" color="primary" size="small">
          Sign Up
        </Button>
      </div>
    </form>
  );

  return <Paper content={content}></Paper>;
};

export default SignupPage;
