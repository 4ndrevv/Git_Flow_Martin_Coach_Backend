'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('food', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand_food: {
        type: Sequelize.STRING
      },
      kcal_g_food: {
        type: Sequelize.DOUBLE
      },
      ingredient1_food: {
        type: Sequelize.STRING
      },
      ingredient2_food: {
        type: Sequelize.STRING
      },
      ingredient3_food: {
        type: Sequelize.STRING
      },
      formula_food: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('food');
  }
};