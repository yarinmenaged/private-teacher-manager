'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TeachersOpenHours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Teacher_id: {
        type: Sequelize.NUMBER
      },
      Student_id: {
        type: Sequelize.NUMBER
      },
      Date: {
        type: Sequelize.DATE
      },
      Time: {
        type: Sequelize.TIME
      },
      Doration: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('TeachersOpenHours');
  }
};