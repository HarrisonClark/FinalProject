var models = require("../models");
var express = require("express");
var app = express.Router();
const path = require("path");

app.get("/api/recent/") {
    return someDatahere
}

// Static hosting of built React files
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});
