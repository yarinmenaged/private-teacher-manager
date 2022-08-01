import ACTIONS from "../actions/actionConstants";

const initState = {
  lessonLengthInMinuets: 60,
  workingHours: [{start: '', end: ''},{start: '', end: ''},{start: '', end: ''},{start: '', end: ''},{start: '', end: ''},{start: '', end: ''},{start: '', end: ''}],
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SET_SETTINGS_FOR_TRACHER:
      return { ...state, workingHours: payload };
    case ACTIONS.GET_SETTINGS_FOR_TEACHER:
      return { ...state };
    case ACTIONS.SET_DAILY_WORKING_HOURS:
      
      return { ...state, workingHours[day]: {
          start: payload.workingHours[payload.day].start,
          end: payload.workingHours[payload.day].end} };
    default:
      return state;
  }
};

export default reducer;
