const { Model, DataTypes } = require("sequelize");
const bc = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(password) {
    return bc.compareSync(password, this.password);
  }
}

User.init(
  {},
  
  {
    sequelize,
    underscored: true,
    timestamps: false,
    freezeTableName: true,
    modelName: "users",
  }
);

module.exports = User;