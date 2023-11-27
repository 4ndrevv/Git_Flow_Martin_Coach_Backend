'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname_animal: {
        type: Sequelize.STRING
      },
      lastname_animal: {
        type: Sequelize.STRING
      },
      birthday_animal: {
        type: Sequelize.INTEGER
      },
      sex_animal: {
        type: Sequelize.BOOLEAN
      },
      sterilized_animal: {
        type: Sequelize.BOOLEAN
      },
      weight_animal: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('animals');
  }
};