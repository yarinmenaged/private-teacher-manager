const SettingsService = require("../services/settings/settingsService");

async function addTeachersSettings(req, res) {
  console.log("create settings");
  const settings = await CreateTeacherSettings(req.body);
  res.status(200).json(settings);
}

async function getTeacherSettings(req, res, next) {
  try {
    const workingHours = await SettingsService.GetTeachersSettings(teacherId);
    return res.status(200).json({
      status: 200,
      workingHours,
    });
  } catch (error) {
    next(error);
  }
}

async function setTeacherSettings(req, res, next) {
  try {
    const workingHours = await SettingsService.GetTeachersSettings(teacherId);
    return res.status(200).json({
      status: 200,
      workingHours,
    });
  } catch (error) {
    next(error);
  }
}

const SettingsController = {
  getTeacherSettings,
  addTeachersSettings,
};

module.exports = SettingsController;
