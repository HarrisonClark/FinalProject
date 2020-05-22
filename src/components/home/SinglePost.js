import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import { FavoriteBorder, Favorite, SendRounded } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function SinglePost({ username, text, image }) {
  const classes = useStyles();

  const [comment, setComment] = useState('');
  const [liked, setLiked] = useState(false);

  // post to API
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment) alert('You must enter a comment before posting!');
    console.log(comment);
    setComment('');
  };

  return (
    <div align="center">
      <Card align="left" className={classes.root}>
        <CardActionArea>
          <CardContent>{username}</CardContent>
          {image ? (
            <CardMedia
              component="img"
              alt={username}
              height="140"
              image={image}
            />
          ) : null}
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={() => setLiked(!liked)} size="small" color="primary">
            {liked ? <Favorite /> : <FavoriteBorder />}
          </Button>
          <Button size="small" color="primary">
            <SendRounded />
          </Button>
        </CardActions>

        <form>
          <TextField
            // fullWidth
            multiline
            variant="outlined"
            size="small"
            label="Enter comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
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
        </form>
      </Card>
    </div>
  );
}
