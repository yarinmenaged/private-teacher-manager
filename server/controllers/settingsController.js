const SettingsService = require("../services/settings/settingsService");
const { GetTeacherById } = require("../services/storage/UserStorageService");

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
    const user = await getUserInfoByToken(req.cookies.token);
    const teacher = await GetTeacherById(user.id);
    const workingHoursData = req.body.workingHours;
    const workingHours = await SettingsService.setTeacherSettings(
      teacher.id,
      workingHoursData
    );
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
