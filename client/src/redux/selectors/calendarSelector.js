const getCalendarState = (state) => state.calendarReducer;
export const getUserId = state => getCalendarState(state).user_id;
export const getShowCalenderOfOtherUser = state => getCalendarState(state).show_calender_of_other_user;