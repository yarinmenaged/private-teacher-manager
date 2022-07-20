'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeachersOpenHours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TeachersOpenHours.init({
    Teacher_id: DataTypes.NUMBER,
    Student_id: DataTypes.NUMBER,
    Date: DataTypes.DATE,
    Time: DataTypes.TIME,
    Doration: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'TeachersOpenHours',
  });
  return TeachersOpenHours;
};