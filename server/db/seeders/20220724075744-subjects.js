'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Subjects', [{
      Name: 'Git',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Html',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Css',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'JavaScript',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Node.js',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'MySql',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Sequelize',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'React',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Redux',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Jest',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Cypress',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'CI/CD',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'SOLID',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Subjects', null, {});
  }
};
