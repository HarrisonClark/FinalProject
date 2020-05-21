export default function Comments(sequelize, DataTypes) {
  const Comments = sequelize.define("Comments", {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Comments;
}
