const getEventState = (state) => state.eventReducer;
export const getEvents = state => getEventState(state).events;