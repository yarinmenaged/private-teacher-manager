import { combineReducers } from "redux";

import settingsReducer from "./settingsReducer";
import userReducer from './userReducer';
import weekReducer from './weekReducer';
import eventReducer from './eventReducer';
import calendarReducer from './calendarReducer';
import teachersReducer from './teachersReducer';
import subjectsReducer from './subjectsReducer';

const allReducers = combineReducers({
  userReducer,
  weekReducer,
  eventReducer,
  calendarReducer,
  teachersReducer,
  settingsReducer,
  subjectsReducer,
});

export default allReducers;
