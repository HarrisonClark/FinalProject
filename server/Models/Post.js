module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    caption: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    likeCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  Post.associate = (db) => {
    db.comment.belongsTo(db.post);
    db.user.hasMany(db.post);
  };

  return Post;
};
