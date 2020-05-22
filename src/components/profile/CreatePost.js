import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import firebase from '../../firebase';
import { useUidContext } from '../UidContext';

const db = firebase.firestore();
// likes and comments as two empty arrays

const CreatePost = () => {
  const [post, setPost] = useState('');
  const [media, setMedia] = useState('');
  const { uid, authenticated } = useUidContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);

    db.collection('posts').add({
      author: uid,
      caption: post,
      comments: [],
      likes: [],
      media: media,
    });

    setPost('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ direction: 'flex-container' }}
      align="center"
    >
      <div>
        <TextField
          // fullWidth
          multiline
          variant="outlined"
          size="small"
          label="Enter post..."
          value={post}
          onChange={(e) => {
            setPost(e.target.value);
          }}
        />

        <Button
          style={{ marginLeft: '10px', marginTop: '9px' }}
          size="small"
          variant="contained"
          color="primary"
          text-transform="none"
          type="submit"
        >
          Post
        </Button>
      </div>
    </form>
  );
};

export default CreatePost;
