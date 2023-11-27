'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coach_animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  coach_animal.init({
    id_coach_animal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'coach_animal',
  });
  return coach_animal;
};