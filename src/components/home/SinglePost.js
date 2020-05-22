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
import {
  FavoriteBorder,
  Favorite,
  ChatBubbleOutlineRounded,
  SendRounded,
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function SinglePost({ username, text, image }) {
  const classes = useStyles();

  const [comment, setComment] = useState('');
  const [liked, setLiked] = useState(false);

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
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={image}
            title="Contemplative Reptile"
          />
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
          {/* <Button size="small" color="primary">
            <ChatBubbleOutlineRounded />
          </Button> */}
          <Button size="small" color="primary">
            <SendRounded />
          </Button>
        </CardActions>
        <div className="flex-container">
          <div>
            <TextField
              // fullWidth
              multiline
              variant="outlined"
              size="small"
              label="Enter comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div>
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
        </div>

        {/* <form>
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
        </form> */}
      </Card>
    </div>
  );
}
