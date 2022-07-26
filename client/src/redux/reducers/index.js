import { combineReducers } from "redux";
import userReducer from './userReducer';
import weekReducer from './weekReducer';
import eventReducer from './eventReducer';
import calendarReducer from './calendarReducer';
import teachersReducer from './teachersReducer';
import sabjectsReducer from './subjectsReducer';

const allReducers = combineReducers({
  userReducer,
  weekReducer,
  eventReducer,
  calendarReducer,
  teachersReducer,
  sabjectsReducer,
});

export default allReducers;