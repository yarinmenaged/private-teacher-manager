import { combineReducers } from "redux";
import userReducer from "./userReducer";
import weekReducer from "./weekReducer";
import eventReducer from "./eventReducer";
import calendarReducer from "./calendarReducer";
import teachersReducer from "./teachersReducer";
import sabjectsReducer from "./subjectsReducer";
import settingsReducer from "./settingsReducer";

const allReducers = combineReducers({
  userReducer,
  weekReducer,
  eventReducer,
  calendarReducer,
  teachersReducer,
  sabjectsReducer,
  settingsReducer,
});

export default allReducers;
