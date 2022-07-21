'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.hasOne(models.UserInfo, {
        foreignKey: 'User_info_id'
      });
      Student.hasMany(models.Messages, {
        foreignKey: "Getter_id"
      });
      Student.hasMany(models.Messages, {
        foreignKey: "Sender_id"
      });
      Student.hasMany(models.TeachersOpenHours, {
        foreignKey: "Student_id"
      });
      Student.hasMany(models.TeacherStudentRelationship, {
        foreignKey: "Student_id"
      });
    }
  }
  Student.init({
    User_info_id: DataTypes.INTEGER,
    Grade: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};