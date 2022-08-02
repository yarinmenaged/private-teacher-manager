import ApiService from "./ApiService";

async function getSettings() {
  try {
    const settings = await ApiService.GetResourceRequest(`settings`);
    return settings.settings;
  } catch (error) {
    //TODO error handle
    throw error;
  }
}

async function setSettings(settings) {
  try {
    const settings_req = await ApiService.AddNewResourceRequest(`settings`, {settings});
    return settings_req.settings;
  } catch (error) {
    //TODO error handle
    throw error;
  }
}

async function getSettingsForSelectedTeacher(teacher_id){
  try {
    const settings = await ApiService.GetResourceRequest(`settings/${teacher_id}`);
    return settings.settings;
  } catch (error) {
    //TODO error handle
    throw error;
  }
}


const SettingsService = {
  getSettings,
  setSettings,
  getSettingsForSelectedTeacher
};

export default SettingsService;
