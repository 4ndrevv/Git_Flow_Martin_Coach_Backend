'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      animal.belongsTo(models.type1, { foreignKey: 'id' });
      animal.belongsTo(models.type2, { foreignKey: 'id' });
    }
  }
  animal.init({
    firstname_animal: DataTypes.STRING,
    lastname_animal: DataTypes.STRING,
    type1_animal_id_type1_animal: DataTypes.INTEGER,
    type2_animal_id_type2_animal: DataTypes.INTEGER,
    birthday_animal: DataTypes.INTEGER,
    sex_animal: DataTypes.BOOLEAN,
    sterilized_animal: DataTypes.BOOLEAN,
    weight_animal: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'animal',
  });
  return animal;
};