'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Subjects', [{
      Name: 'History',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'English',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Math',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Art',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Music',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Spanish',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'Biology',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'French',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'science',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'geography',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'algebra',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'geometry',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'chemistry',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Name: 'physics',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Subjects', null, {});
  }
};
