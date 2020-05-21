module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
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

  return Posts;
};
