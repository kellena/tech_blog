const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {},
  
  {
    sequelize,
    underscored: true,
    timestamps: false,
    freezeTableName: true,
    modelName: "posts",
  }
);

module.exports = Post;