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
      Teacher.belongsTo(models.UserInfo, {
        foreignKey: "User_info_id"
      });
      
      Teacher.belongsToMany(models.Subjects, { 
        through: models.TeachersAnnouncements
      });

      Teacher.belongsToMany(models.Student, {
        through: models.TeachersOpenHours
      });
      
      Teacher.belongsToMany(models.Student, {
        through: models.TeacherStudentRelationship
      });
    }
  }
  Teacher.init({
    About: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};