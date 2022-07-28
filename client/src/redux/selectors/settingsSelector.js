export const getUserInfo = (state) => {
  return state.userReducer;
};

export const getUserType = (state) => {
  return getUserInfo(state).Type;
};
