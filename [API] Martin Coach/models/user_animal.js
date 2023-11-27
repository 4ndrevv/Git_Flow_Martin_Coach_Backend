'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_animal.belongsTo(models.user, { foreignKey: 'id' });
      user_animal.belongsTo(models.animal, { foreignKey: 'id' });
    }
  }
  user_animal.init({
    animal_id_animal: DataTypes.INTEGER,
    user_id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_animal',
  });
  return user_animal;
};