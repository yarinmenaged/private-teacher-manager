import ACTIONS from "./actionConstants";
import SettingsService from "../../../../server/services/settings/settingsService";

const getSettingsForTeacher = (teacherId) => {
  return async (dispatch) => {
    const workingHours = SettingsService.GetTeacherSettings(teacherId);
    dispatch({ type: ACTIONS.GET_SETTINGS_FOR_TEACHER, payload: workingHours });
  };
};

export const getSettingsForTeacherAction = (teacherId) => {
  return async (dispatch) => {
    dispatch(getSettingsForTeacher(teacherId));
  };
};

const setSettingsForTeacher = (teacherId) => {
  return async (dispatch) => {
    const workingHours = SettingsService.SetTeacherSettings(teacherId);
    dispatch({ type: ACTIONS.SET_SETTINGS_FOR_TEACHER, payload: workingHours });
  };
};

export const setSettingsForTeacherAction = (teacherId) => {
  return async (dispatch) => {
    dispatch(setSettingsForTeacher(teacherId));
  };
};

const setDailyWorkingHours = (day, workingHoursString) => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.SET_DAILY_WORKING_HOURS,
      payload: {
        workingHour: workingHoursString,
        day: day,
      },
    });
  };
};

export const setDailyWorkingHoursAction = (day, workingHoursString) => {
  return (dispatch) => {
    dispatch(setDailyWorkingHours(day, workingHoursString));
  };
};
