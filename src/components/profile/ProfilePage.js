import React from 'react';
import Paper from '../Paper';

const ProfilePage = ({ first, last, username }) => {
  const content = (
    <div>
      {first} {last}
      <br />
      Welcome {username}!
    </div>
  );
  return <Paper content={content} />;
};

export default ProfilePage;
