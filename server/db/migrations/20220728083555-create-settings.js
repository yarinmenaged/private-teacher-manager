'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teacherId: {
        type: Sequelize.INTEGER
      },
      Sunday: {
        type: Sequelize.STRING
      },
      Monday: {
        type: Sequelize.STRING
      },
      Tuesday: {
        type: Sequelize.STRING
      },
      Wednesday: {
        type: Sequelize.STRING
      },
      Thursday: {
        type: Sequelize.STRING
      },
      Friday: {
        type: Sequelize.STRING
      },
      Saturday: {
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
    await queryInterface.dropTable('Settings');
  }
};