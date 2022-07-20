'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TeachersAnnouncements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Teacher_id: {
        type: Sequelize.NUMBER,
        allowNull: false
      },
      Meassage: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Subject_id: {
        type: Sequelize.NUMBER,
        allowNull: false
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
    await queryInterface.dropTable('TeachersAnnouncements');
  }
};