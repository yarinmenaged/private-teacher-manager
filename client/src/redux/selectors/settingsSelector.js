export const getSettingsState = (state) => state.settingsReducer;
export const getSettings = state => getSettingsState(state).settings;