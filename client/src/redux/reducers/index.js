import { combineReducers } from "redux";
import screenReducer from './screenReducer';
import weekReducer from './weekReducer';

const allReducers = combineReducers({
  screenReducer,
  weekReducer
});

export default allReducers;