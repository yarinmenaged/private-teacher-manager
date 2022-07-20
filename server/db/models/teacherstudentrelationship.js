'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherStudentRelationship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TeacherStudentRelationship.belongsToMany(models.Teacher);
      TeacherStudentRelationship.belongsToMany(models.Student);
      TeacherStudentRelationship.hasMany(models.Subjects, {
        foreignKey: "Subject_is"
      });
    }
  }
  TeacherStudentRelationship.init({
    Teacher_id: DataTypes.NUMBER,
    Student_id: DataTypes.NUMBER,
    Subject_id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'TeacherStudentRelationship',
  });
  return TeacherStudentRelationship;
};