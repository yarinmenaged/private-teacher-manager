import { combineReducers } from "redux";

import settingsReducer from "./settingsReducer";
import userReducer from './userReducer';
import weekReducer from './weekReducer';
import eventReducer from './eventReducer';
import calendarReducer from './calendarReducer';
import teachersReducer from './teachersReducer';
import subjectsReducer from './subjectsReducer';
import viewReducer from './viewReducer';
import locationReducer from './locationReducer';

const allReducers = combineReducers({
  viewReducer,
  userReducer,
  weekReducer,
  eventReducer,
  calendarReducer,
  teachersReducer,
  settingsReducer,
  subjectsReducer,
  locationReducer,
});

export default allReducers;
