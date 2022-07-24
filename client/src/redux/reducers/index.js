import { combineReducers } from "redux";
import userReducer from './userReducer';
import weekReducer from './weekReducer';

const allReducers = combineReducers({
  userReducer,
  weekReducer
});

export default allReducers;