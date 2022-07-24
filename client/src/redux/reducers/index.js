import { combineReducers } from "redux";
import userReducer from './userReducer';
import weekReducer from './weekReducer';
import eventReducer from './eventReducer';

const allReducers = combineReducers({
  userReducer,
  weekReducer,
  eventReducer
});

export default allReducers;