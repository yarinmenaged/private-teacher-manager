export const getSettingsState = (state) => state.settingsReducer;
export const getSettings = state => getSettingsState(state);
export const getLessonLength = state => getSettings(state).lessonLength;