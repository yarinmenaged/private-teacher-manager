const SettingsService = require("../services/settings/settingsService");
const { GetTeacherById } = require("../services/storage/UserStorageService");
const { getUserInfoByToken } = require("../services/auth/auth");

async function getTeacherSettings(req, res, next) {
  try {
    const user = await getUserInfoByToken(req.cookies.token);
    const teacher = await GetTeacherById(user.id);
    const settings = await SettingsService.GetTeacherSettings(teacher.id);
    return res.status(200).json({
      status: 200,
      settings,
    });
  } catch (error) {
    next(error);
  }
}

async function getTeacherSettingsSelectedTeacher(req, res, next) {
  try {
    const teacher = await GetTeacherById(req.params.id);
    const settings = await SettingsService.GetTeacherSettings(teacher.id);
    return res.status(200).json({
      status: 200,
      settings,
    });
  } catch (error) {
    next(error);
  }
}

async function setTeacherSettings(req, res, next) {
  try {
    const user = await getUserInfoByToken(req.cookies.token);
    const teacher = await GetTeacherById(user.id);
    const working_hours_data = req.body.settings.workingHours;
    const lesson_length_data = req.body.settings.lessonLength;
    const working_hours = await SettingsService.SetTeacherSettings(
      teacher.id,
      working_hours_data,
      lesson_length_data
    );
    return res.status(200).json({
      status: 200,
      settings: working_hours
    });
  } catch (error) {
    next(error);
  }
}

const SettingsController = {
  getTeacherSettings,
  setTeacherSettings,
  getTeacherSettingsSelectedTeacher
};

module.exports = SettingsController;
