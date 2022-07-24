'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeachersAnnouncements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TeachersAnnouncements.init({
    Message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TeachersAnnouncements',
  });
  return TeachersAnnouncements;
};