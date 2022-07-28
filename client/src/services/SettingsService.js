import ApiService from "./ApiService";

async function getSettings(teacherId) {
  try {
    const events = await ApiService.GetResourceRequest(`settings/${teacherId}`);
    return events.events;
  } catch (error) {
    //TODO error handle
    throw error;
  }
}

const SettingsService = {
  getSettings,
};

export default SettingsService;
