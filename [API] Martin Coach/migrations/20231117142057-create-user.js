'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname_user: {
        type: Sequelize.STRING
      },
      lastname_user: {
        type: Sequelize.STRING
      },
      birthday_user: {
        type: Sequelize.INTEGER
      },
      telephone_user: {
        type: Sequelize.STRING
      },
      email_user: {
        type: Sequelize.STRING
      },
      address_user: {
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
    await queryInterface.dropTable('users');
  }
};