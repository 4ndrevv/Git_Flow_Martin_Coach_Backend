'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activity_animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  activity_animal.init({
    activity_id_activity: DataTypes.INTEGER,
    animal_id_animal: DataTypes.INTEGER,
    time_start_activity: DataTypes.INTEGER,
    duration_activity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'activity_animal',
  });
  return activity_animal;
};