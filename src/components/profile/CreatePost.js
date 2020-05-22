import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const CreatePost = () => {
  const [post, setPost] = useState('');

  const handleSubmit = (post) => {};

  return (
    <div>
      <TextField
        // fullWidth
        multiline
        variant="outlined"
        size="small"
        label="Enter post..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <Button
        size="small"
        variant="contained"
        color="primary"
        text-transform="none"
        onClick={handleSubmit}
      >
        Post
      </Button>
    </div>
  );
};

export default CreatePost;
