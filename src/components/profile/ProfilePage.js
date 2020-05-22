import React from 'react';
import Paper from '../Paper';
import CreatePost from './CreatePost';

const ProfilePage = ({ first, last, username }) => {
  const content = (
    <div>
      {first} {last}
      <br />
      Welcome {username}!
      <CreatePost />
    </div>
  );
  return <Paper content={content} />;
};

export default ProfilePage;
