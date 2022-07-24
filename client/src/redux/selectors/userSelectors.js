export const getUserInfo = (state) => {
	return state.userReducer.user;
};

export const getLoginStatus = (state) => {
	return state.userReducer.loginStatus;
};
