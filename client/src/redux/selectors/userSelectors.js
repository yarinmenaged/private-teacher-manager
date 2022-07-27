export const getUserInfo = (state) => {
	return state.userReducer.user;
};

export const getUserType = (state) => {
    return state.userReducer.Type;
}

export const getLoginStatus = (state) => {
	return state.userReducer.loginStatus;
};
