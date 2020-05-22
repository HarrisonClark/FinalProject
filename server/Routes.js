// import { createUser, checkIfAuthenticated } from './auth.js';
var { createUser, checkIfAuthenticated } = require('./auth.js');
var models = require('./InitDB');
var express = require('express');
var app = express.Router();

// Creating a Post
app.post('/api/createpost/', (req, res) => {
  console.log('CREATING POSTS');
  console.log(req.body);
  const run = async () => {
    var { caption, userId } = req.body;
    await models.post.create({ caption, userId });
    console.log('CREATED?' + caption + userId);
    return res.json({ status: 'SUCCESS' });
  };
  run().catch((e) => console.log(e));
});

// Fetch Recent Posts
app.get('/api/posts/', (req, res) => {
  console.log('FETCHING POSTS');
  const run = async () => {
    let recentPosts = await models.post.findAll();
    return res.json(recentPosts);
  };
  run().catch((e) => console.log(e));
});

app.get('/api/testauth', checkIfAuthenticated, async (req, res) => {
  return res.send('Success?');
});

// Fetch Single Post
app.get('/api/post/:id', (req, res) => {
  const id = req.params.id;

  console.log('FETCHING POST');
  const run = async () => {
    let post = await models.post.findAll({ where: { id } });
    return res.json(post);
  };
  run().catch((e) => console.log(e));
});

// Fetch Single User
app.get('/api/user/:id', (req, res) => {
  const id = req.params.id;

  console.log('FETCHING POST');
  const run = async () => {
    let user = await models.user.findAll({ where: { id } });
    return res.json(user);
  };
  run().catch((e) => console.log(e));
});

// Fetch Recent Posts
app.get('/api/comments/:postId', (req, res) => {
  const postId = req.params.postId;

  console.log('FETCHING COMMENTS');

  const run = async () => {
    let comments = await models.comment.findAll({ where: { postId } });
    return res.json(comments);
  };

  console.log(run());
});

module.exports = app;
