require("dotenv").config();
const { Sequelize } = require("sequelize");
const DEVELOPMENT = true;

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DATABASE_HOST,
  }
);

const Posts = sequelize.import(__dirname + "/Posts");
const Comments = sequelize.import(__dirname + "/Comments");
const Users = sequelize.import(__dirname + "/Users");

const initDatabaseConnection = async () => {
  await sequelize.authenticate();
  console.log("DB Authenticated!");

  Users.hasMany(Posts, { as: "posts" });
  Users.hasMany(Comments, { as: "comments" });

  Comments.belongsTo(Users);
  Posts.belongsTo(Users);

  if (DEVELOPMENT) {
    await sequelize.sync({ force: true });
    let hc = Users.create({
      firstName: "Harrison",
      lastName: "Clark",
      userName: "HarrisonC",
      email: "harrison.clark99@gmail.com",
    });
    Posts.create({ caption: "Hello, World", UsersId: hc.id });
  }

  await sequelize.sync(); //{ force: true } to clear
  console.log("Succesfully synced!");
};

initDatabaseConnection().catch((error) => console.log(error));
