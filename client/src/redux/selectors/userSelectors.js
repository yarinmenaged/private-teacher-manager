export const getUserInfo = (state) => {
	debugger;
	return state.userReducer.user;
};

export const getLoginStatus = (state) => {
	return state.userReducer.loginStatus;
};
