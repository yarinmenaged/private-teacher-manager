"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Teachers", "price", Sequelize.INTEGER);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Teachers", "price");
  },
};
