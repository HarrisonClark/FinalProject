const DEVELOPMENT = true;
var db = require('./Models');

const initDatabaseConnection = async () => {
  await db.sequelize.authenticate();
  console.log('DB Authenticated!');

  if (DEVELOPMENT) {
    await db.sequelize.sync({ force: true });

    let hc = await db.user.create({
      firstName: 'Harrison',
      lastName: 'Clark',
      userName: 'HarrisonC',
      email: 'harrison.clark99@gmail.com',
    });
    let post = await db.post.create({ caption: 'hello, world', userId: hc.id });
    await db.comment.create({
      comment: 'This is a teset comment',
      userId: hc.id,
      postId: post.id,
    });

    let u2 = await db.user.create({
      firstName: 'Rebecca',
      lastName: 'Zhou',
      userName: 'RebeccaZ',
      email: 'rebecca@gmail.com',
    });
    await db.post.create({
      caption: 'another comment',
      userId: u2.id,
    });
    await db.comment.create({
      comment: 'This is a 2nd test comment',
      userId: u2.id,
      postId: post.id,
    });
  }

  console.log('Succesfully synced!');

  return db;
};

initDatabaseConnection();
module.exports = db;
