import React, { useEffect, useState } from 'react';
import Paper from '../Paper';
import CreatePost from './CreatePost';
import { Typography } from '@material-ui/core';
import firebase from '../../firebase';
import { useHistory } from 'react-router-dom';
import { useUidContext } from '../UidContext';

const db = firebase.firestore();

const ProfilePage = () => {
  const { uid, authenticated } = useUidContext();
  const [username, setUsername] = useState();
  let history = useHistory();

  if (!authenticated) {
    history.push('/');
  }

  useEffect(() => {
    db.collection('users')
      .doc(uid)
      .get()
      .then((user) => setUsername(user.data().username));
  }, [uid]);

  const content = (
    <div style={{ marginLeft: '10px' }}>
      <Typography variant="subtitle1" gutterBottom align="left" color="primary">
        Welcome {username}!
      </Typography>
      <br />
      <CreatePost />
    </div>
  );
  return <Paper content={content} />;
};

export default ProfilePage;
