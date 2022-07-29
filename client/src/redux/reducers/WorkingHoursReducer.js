import ACTIONS from "../actions/actionConstants";

const initState = {
  lessonLengthInMinuets: 60,
  workingHours: {
    Sunday: "",
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
  },
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SET_SETTINGS_FOR_TRACHER:
      return { ...state, workingHours: payload };
    case ACTIONS.GET_SETTINGS_FOR_TEACHER:
      return { ...state };
    case ACTIONS.SET_DAILY_WORKING_HOURS:
      return { workingHours: payload.workingHours[payload.day] };
    default:
      return state;
  }
};

export default reducer;
