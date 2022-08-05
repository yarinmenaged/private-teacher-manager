import ACTIONS from "./actionConstants";
import ConstantsCalendarContainer from "../../components/Schedule/CalendarContainer/Constants";
import SettingsService from '../../services/SettingsService';
import ErrorSuccessMessages from "../../ErrorSuccessMessages";

const setSettingsForTeacher = (settings) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ACTIONS.SET_SETTINGS_FOR_TEACHER, payload: settings });
      await SettingsService.setSettings(settings);
      dispatch({ type: ACTIONS.SUCCESSFUL, payload: ErrorSuccessMessages.SET_SETTINGS_SUCCESSFUL });
    } catch (error) {
      dispatch({ type: ACTIONS.FAILED, payload: ErrorSuccessMessages.SET_SETTINGS_FAILED });
    }
  };
};

export const setSettingsForTeacherAction = (settings) => {
  return (dispatch) => {
    dispatch(setSettingsForTeacher(settings));
  };
};

const GetSettings = () => {
  return async (dispatch) => {
    try {
      const settings = await SettingsService.getSettings();
      settings.workingHours = await JSON.parse(settings.workingHours);
      dispatch({ type: ACTIONS.SET_SETTINGS_FOR_TEACHER, payload: settings });
    } catch (error) {
      dispatch({ type: ACTIONS.FAILED, payload: ErrorSuccessMessages.GET_SETTINGS_FAILED });
    }
  };
};

export const GetSettingsAction = () => {
  return dispatch => {
    dispatch(GetSettings());
  };
};

const GetSelectedTeacherSettings = (teacher_id) => {
  return async (dispatch) => {
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
    dispatch({ type: ACTIONS.UNSET_TEACHER_SETTINGS, payload: null });
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
