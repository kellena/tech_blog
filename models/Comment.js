const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(

  {},

  {
    sequelize,
    underscored: true,
    timestamps: false,
    freezeTableName: true,
    modelName: "comments",
  }
  
);

module.exports = Comment;