'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  food.init({
    brand_food: DataTypes.STRING,
    kcal_g_food: DataTypes.DOUBLE,
    ingredient1_food: DataTypes.STRING,
    ingredient2_food: DataTypes.STRING,
    ingredient3_food: DataTypes.STRING,
    formula_food: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'food',
  });
  return food;
};