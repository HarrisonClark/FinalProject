const express = require("express");
const app = express();
require("dotenv").config();

var routes = require("./server/Routes");

app.use("/", routes);

const port = process.env.PORT || 8080; // Listening for requests on a specific port
app.listen(port, () => {
  console.log("Server listening on port 8080");
});
