import ACTIONS from "../actions/actionConstants";

const initState = {
  lessonLengthInMinuets: 60,
  workingHours: [
    { start: "", end: "" },
    { start: "", end: "" },
    { start: "", end: "" },
    { start: "", end: "" },
    { start: "", end: "" },
    { start: "", end: "" },
    { start: "", end: "" },
  ],
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SET_SETTINGS_FOR_TEACHER:
      return { ...state, workingHours: payload };
    case ACTIONS.SET_DAILY_WORKING_HOURS:
      const day_obj = state.workingHours[payload.day];
      day_obj.start = payload.start;
      day_obj.end = payload.end;
      const days_array_filterd = state.workingHours.filter(
        (value, index) => index !== payload.day
      );
      return { ...state, workingHours: [...days_array_filterd, day_obj] };
    default:
      return state;
  }
};

export default reducer;
