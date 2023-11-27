'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    firstname_user: DataTypes.STRING,
    lastname_user: DataTypes.STRING,
    birthday_user: DataTypes.INTEGER,
    telephone_user: DataTypes.STRING,
    email_user: DataTypes.STRING,
    address_user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};