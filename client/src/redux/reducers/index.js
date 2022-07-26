import { combineReducers } from "redux";
import userReducer from './userReducer';
import weekReducer from './weekReducer';
import eventReducer from './eventReducer';
import calendarReducer from './calendarReducer';

const allReducers = combineReducers({
  userReducer,
  weekReducer,
  eventReducer,
  calendarReducer
});

export default allReducers;