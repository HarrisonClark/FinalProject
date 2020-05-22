import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const CreatePost = () => {
  const [post, setPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
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
