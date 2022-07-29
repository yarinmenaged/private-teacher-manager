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
      Sunday: workingHours[Sunday],
      Monday: workingHours[Monday],
      Tuesday: workingHours[Tuesday],
      Wednesday: workingHours[Wednesday],
      Thursday: workingHours[Thursday],
      Friday: workingHours[Friday],
      Saturday: workingHours[Saturday],
    },
    { transaction: transaction }
  );
}

async function SetTeacherSettings(teacherId, workingHours) {
  const settings = await GetTeacherSettings(teacherId);
  return await Settings.update({
    Sunday: workingHours[Sunday],
    Monday: workingHours[Monday],
    Tuesday: workingHours[Tuesday],
    Wednesday: workingHours[Wednesday],
    Thursday: workingHours[Thursday],
    Friday: workingHours[Friday],
    Saturday: workingHours[Saturday],
  });
}

const SettingsService = {
  GetTeacherSettings,
  CreateTeacherSettings,
  SetTeacherSettings,
};

module.exports = SettingsService;
