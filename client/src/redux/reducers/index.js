import { combineReducers } from "redux";
import userReducer from './userReducer';
import weekReducer from './weekReducer';
import eventReducer from './eventReducer';
import teachersReducer from './teachersReducer';

const allReducers = combineReducers({
  userReducer,
  weekReducer,
  eventReducer,
  teachersReducer,
});

export default allReducers;