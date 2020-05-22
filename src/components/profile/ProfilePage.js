import React from 'react';
import Paper from '../Paper';
import CreatePost from './CreatePost';
import { Typography } from '@material-ui/core';

const ProfilePage = ({ first, last, username }) => {
  const content = (
    <div>
      <Typography variant="h6" gutterBottom align="left" color="primary">
        {first} {last}
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="left" color="primary">
        Welcome {username}!{' '}
      </Typography>
      <br />
      <CreatePost />
    </div>
  );
  return <Paper content={content} />;
};

export default ProfilePage;
