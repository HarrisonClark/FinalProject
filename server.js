const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
var routes = require('./server/Routes');

app.use(express.json());

app.use('/', routes);

// Static hosting of built React files
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = process.env.PORT || 8080; // Listening for requests on a specific port
app.listen(port, () => {
  console.log('Server listening on port 8080');
});
