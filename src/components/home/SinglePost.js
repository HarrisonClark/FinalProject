import React, { useState, useEffect } from 'react';
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
  List,
} from '@material-ui/core';
import { FavoriteBorder, Favorite, SendRounded } from '@material-ui/icons';
import firebase from '../../firebase';
import { useUidContext } from '../UidContext';
let db = firebase.firestore();

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function SinglePost({ id, username, text, image, comments }) {
  const classes = useStyles();
  const { uid, authenticated } = useUidContext();
  const [comment, setComment] = useState('');
  const [liked, setLiked] = useState(false);
  const [allComments, setAllComments] = useState(comments);
  useEffect(() => {
    if (authenticated) {
      db.collection('posts')
        .doc(id)
        .get()
        .then((post) => {
          let likes = post.data().likes;
          setLiked(likes.includes(uid));
        });
    }
  }, [id, uid, authenticated]);

  const toggleLike = async () => {
    if (!authenticated) {
      alert('You must be logged in like');
    }
    let post = await db.collection('posts').doc(id).get();
    let likes = post.data().likes;
    let alreadyLiked = likes.includes(uid);
    if (alreadyLiked) {
      await db
        .collection('posts')
        .doc(id)
        .update({ likes: likes.filter((like) => like !== uid) });
      setLiked(false);
    } else {
      await db
        .collection('posts')
        .doc(id)
        .update({ likes: [...likes, uid] });
      setLiked(true);
    }
  };

  const AddComment = async (e) => {
    e.preventDefault();
    if (!comment) alert('You must enter a comment before posting!');

    console.log(comment);
    db.collection('posts')
      .doc(id)
      .update({ comments: [...comments, { author: uid, message: comment }] });

    setAllComments([...allComments, { author: uid, message: comment }]);
    setComment('');
  };

  function Comments() {
    if (!allComments || allComments.length === 0) {
      return <div></div>;
    } else {
      return allComments.map((c) => {
        return (
          <List style={{ listStyleType: 'none' }} key={c.author}>
            {c.message}
          </List>
        );
      });
    }
  }

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
          <Button onClick={toggleLike} size="small" color="primary">
            {liked ? <Favorite /> : <FavoriteBorder />}
          </Button>
          <Button size="small" color="primary">
            <SendRounded />
          </Button>
        </CardActions>
        <ul style={{ marginBottom: '10px' }}>
          <Comments />
        </ul>
        <form onSubmit={AddComment}>
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
            type="submit"
            variant="contained"
            color="primary"
            text-transform="none"
          >
            Post
          </Button>
        </form>
      </Card>
    </div>
  );
}
