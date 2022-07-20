'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Teacher.hasOne(models.UserInfo, {
        foreignKey: 'User_info_id'
      });
      Teacher.hasMany(models.Messages, {
        foreignKey: "Getter_id"
      });
      Teacher.hasMany(models.Messages, {
        foreignKey: "Sender_id"
      });
      Teacher.hasMany(models.TeachersAnnouncements, {
        foreignKey: "Teacher_id"
      });
      Teacher.hasMany(models.TeachersOpenHours, {
        foreignKey: "Teacher_id"
      });
      Teacher.hasMany(models.TeacherStudentRelationship, {
        foreignKey: "Teacher_id"
      });
    }
  }
  Teacher.init({
    User_info_id: DataTypes.NUMBER,
    About: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};