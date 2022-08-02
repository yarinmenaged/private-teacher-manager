import ACTIONS from "./actionConstants";
import ConstantsCalendarContainer from "../../components/Schedule/CalendarContainer/Constants";
import SettingsService from '../../services/SettingsService';

const setSettingsForTeacher = (settings) => {
  return async (dispatch) => {    
    dispatch({ type: ACTIONS.SET_SETTINGS_FOR_TEACHER, payload: settings });
    const workingHours = await SettingsService.setSettings(settings);
  };
};

export const setSettingsForTeacherAction = (settings) => {
  return (dispatch) => {
    dispatch(setSettingsForTeacher(settings));
  };
};

const setDailyWorkingHours = (day, start, end) => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.SET_DAILY_WORKING_HOURS,
      payload: {
        start: start,
        end: end,
        day: ConstantsCalendarContainer.DAYS_IN_WEEK.indexOf(day),
      },
    });
  };
};

export const setDailyWorkingHoursAction = (day, start, end) => {
  return (dispatch) => {
    dispatch(setDailyWorkingHours(day, start, end));
  };
};
