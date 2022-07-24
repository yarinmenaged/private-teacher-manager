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
      Student.belongsTo(models.UserInfo, {
        foreignKey: "User_info_id"
      });
      Student.belongsToMany(models.Teacher, {
        through: models.TeachersOpenHours
      });
      Student.belongsToMany(models.Teacher, {
        through: models.TeacherStudentRelationship
      });
      Student.belongsToMany(models.Teacher, {
        through: models.Event
      });
    }
  }
  Student.init({
    Grade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};