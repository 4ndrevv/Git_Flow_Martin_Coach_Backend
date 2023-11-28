'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class food_animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      food_animal.belongsTo(models.animal, { foreignKey: 'id' });
      food_animal.belongsTo(models.food, { foreignKey: 'id' });
    }
  }
  food_animal.init({
    time_add: DataTypes.INTEGER,
    food_id_food: DataTypes.INTEGER,
    animal_id_animal: DataTypes.INTEGER,
    quantity_food: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'food_animal',
  });
  return food_animal;
};