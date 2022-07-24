const getWeekState = (state) => state.weekReducer;
export const getWeek = state => getWeekState(state).week;