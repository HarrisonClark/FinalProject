var db = require("./Models");
const DEVELOPMENT = true;

const initDatabaseConnection = async () => {
  await db.sequelize.authenticate();
  console.log("DB Authenticated!");

  db.Users.hasMany(db.Posts, { as: "posts" });
  db.Users.hasMany(db.Comments, { as: "comments" });

  db.Comments.belongsTo(db.Users);
  db.Comments.belongsTo(db.Posts);
  db.Posts.belongsTo(db.Users);

  if (DEVELOPMENT) {
    await db.sequelize.sync({ force: true });
    let hc = db.Users.create({
      firstName: "Harrison",
      lastName: "Clark",
      userName: "HarrisonC",
      email: "harrison.clark99@gmail.com",
    });
    let post = db.Posts.create({ caption: "Hello, World", UsersId: hc.id });
    db.Comments.create({
      comment: "This is a teset comment",
      UsersId: hc.id,
      PostsId: post.id,
    });
  }

  await db.sequelize.sync(); //{ force: true } to clear
  console.log("Succesfully synced!");
};

module.exports = initDatabaseConnection;
