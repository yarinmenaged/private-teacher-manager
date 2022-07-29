import { combineReducers } from "redux";
import userReducer from "./userReducer";
import weekReducer from "./weekReducer";
import eventReducer from "./eventReducer";
import WorkingHoursReducer from "./WorkingHoursReducer";

const allReducers = combineReducers({
  userReducer,
  weekReducer,
  eventReducer,
  WorkingHoursReducer,
});

export default allReducers;
