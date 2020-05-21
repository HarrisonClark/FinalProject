const express = require("express");
const app = express();
require("dotenv").config();
const { Sequelize } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DATABASE_HOST,
  }
);

const Urls = sequelize.import(__dirname + "/models/urls");
const PageHits = sequelize.import(__dirname + "/models/pageHits");

const run = async () => {
  await sequelize.authenticate();
  console.log("DB Authenticated!");

  Urls.hasMany(PageHits, { as: "pageHits" });
  PageHits.belongsTo(Urls, {
    foreignKey: "id",
    as: "url",
  });

  await sequelize.sync(); //{ force: true } to clear
  console.log("Succesfully synced!");
};

run().catch((error) => console.log(error));

// Static hosting of built React files
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

const port = process.env.PORT || 8080; // Listening for requests on a specific port
app.listen(port, () => {
  console.log("Server listening on port 8080");
});
