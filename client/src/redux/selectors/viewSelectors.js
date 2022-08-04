const getViewReducer = state => state.viewReducer;
export const getMessage = state => getViewReducer(state).message;
export const getSuccessful = state => getViewReducer(state).successful;
export const getFailed = state => getViewReducer(state).failed;