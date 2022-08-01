const { Settings } = require("../../db/models");

async function GetTeacherSettings(teacherId) {
  try {
    return await Settings.findOne({
      where: { teacherId: Settings.teacherId },
    });
  } catch (error) {
    throw error;
  }
}

async function CreateTeacherSettings(teacherId, workingHours) {
  return await Teacher.create(
    {
      teacherId,
      workingHours: JSON.parse(workingHours),
    },
    { transaction: transaction }
  );
}

async function SetTeacherSettings(teacherId, workingHours) {
  const settings = await GetTeacherSettings(teacherId);
  return await Settings.update({
    workingHours: JSON.parse(workingHours),
  });
}

const SettingsService = {
  GetTeacherSettings,
  CreateTeacherSettings,
  SetTeacherSettings,
};

module.exports = SettingsService;
