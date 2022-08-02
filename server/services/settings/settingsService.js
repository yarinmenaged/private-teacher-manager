const { Settings } = require("../../db/models");

async function GetTeacherSettings(teacherId) {
  try {
    return await Settings.findOne({
      where: { TeacherId: teacherId },
    });
  } catch (error) {
    throw error;
  }
}

async function SetTeacherSettings(teacherId, workingHours, lessonLength) {
  try{
    const working_hours_json = await JSON.stringify(workingHours)
  return await Settings.update({
    workingHours: working_hours_json,
    lessonLength: lessonLength
  }, {
    where: {
      TeacherId: teacherId
    }
  });
}catch(error){
  throw error;
}
}

const SettingsService = {
  GetTeacherSettings,
  SetTeacherSettings,
};

module.exports = SettingsService;
