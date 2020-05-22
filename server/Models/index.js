var fs = require('fs');
var path = require('path');
var basename = path.basename(__filename);
require('dotenv').config();
const { Sequelize } = require('sequelize');
var db = {};

console.log('************************************');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    pool: { max: 3 },
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    var model = sequelize.import(path.join(__dirname, file));
    console.log('MODEL CREATED FOR: ' + model.name);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
