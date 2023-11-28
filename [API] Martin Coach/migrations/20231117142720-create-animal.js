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
      type1_animal_id_type1_animal: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'type1', // Tên bảng mà id_animal là primaryKey
          key: 'id' // Tên cột id
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      type2_animal_id_type2_animal: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'type2', // Tên bảng mà id_animal là primaryKey
          key: 'id' // Tên cột id
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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