import ACTIONS from "./actionConstants";
import ConstantsCalendarContainer from "../../components/Schedule/CalendarContainer/Constants";
import SettingsService from '../../services/SettingsService';

const setSettingsForTeacher = (settings) => {
  return async (dispatch) => {    
    dispatch({ type: ACTIONS.SET_SETTINGS_FOR_TEACHER, payload: settings });
    const settings_req = await SettingsService.setSettings(settings);
  };
};

export const setSettingsForTeacherAction = (settings) => {
  return (dispatch) => {
    dispatch(setSettingsForTeacher(settings));
  };
};

const GetSettings = () => {
  return async(dispatch) => {
    const settings = await SettingsService.getSettings();
    settings.workingHours = await JSON.parse(settings.workingHours);
    dispatch({ type: ACTIONS.SET_SETTINGS_FOR_TEACHER, payload: settings });
  };
};

export const GetSettingsAction = () => {
  return dispatch => {
    dispatch(GetSettings());
  };
};

const GetSelectedTeacherSettings = (teacher_id) => {
  return async(dispatch) => {
    const settings = await SettingsService.getSettingsForSelectedTeacher(teacher_id);
    settings.workingHours = await JSON.parse(settings.workingHours);
    dispatch({ type: ACTIONS.SET_SETTINGS_FOR_TEACHER, payload: settings });
  };
};

export const GetSelectedTeacherSettingsAction = (teacher_id) => {
  return dispatch => {
    dispatch(GetSelectedTeacherSettings(teacher_id));
  };
};

export const UnsetTeacherSettingsAction = () => {
  return dispatch => {
    dispatch({ type: ACTIONS.UNSET_TEACHER_SETTINGS, payload: null});
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

const setLessonLength = (lesson_length) => {
  return dispatch => {
    dispatch({ type: ACTIONS.SET_LESSON_LENGTH, payload: lesson_length });
  };
};

export const setLessonLengthAction = (lesson_length) => {
  return dispatch => {
    dispatch(setLessonLength(lesson_length));
  };
};
