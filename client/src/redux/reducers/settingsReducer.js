import ACTIONS from "../actions/actionConstants";

const initState = {
  lessonLength: 60,
  workingHours: [
    { start: "00:00", end: "00:00" },
    { start: "00:00", end: "00:00" },
    { start: "00:00", end: "00:00" },
    { start: "00:00", end: "00:00" },
    { start: "00:00", end: "00:00" },
    { start: "00:00", end: "00:00" },
    { start: "00:00", end: "00:00" },
  ],
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SET_SETTINGS_FOR_TEACHER:
      if(!payload.lessonLength && !payload.workingHours)
        return initState;
      else
        return { lessonLength: payload.lessonLength, workingHours: payload.workingHours };
    case ACTIONS.SET_DAILY_WORKING_HOURS:
      const day_obj = state.workingHours[payload.day];
      day_obj.start = payload.start;
      day_obj.end = payload.end;
      return { ...state, workingHours: [...state.workingHours] };
    case ACTIONS.SET_LESSON_LENGTH:
      return { ...state, lessonLength: payload.lesson_length };
    case ACTIONS.UNSET_TEACHER_SETTINGS:
      return initState;
    default:
      return state;
  }
};

export default reducer;
