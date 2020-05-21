var models = require("./models");
var express = require("express");
var app = express.Router();

// Fetch Recent Posts
app.get("/api/posts/", (req, res) => {
  const run = async () => {
    let recentPosts = await models.Posts.findAll();
    console.log(recentPosts);
    return res.json(recentPosts);
  };
  console.log(run());
});

module.exports = app;
