export const getUserInfo = (state) => {
    return state.userReducer;
}

export const getUserType = (state) => {
    return state.userReducer.Type;
}

export const getUserName = (state) => {
    return state.userReducer.Name;
}

export const getLoginStatus = (state) => {
	return state.userReducer.loginStatus;
};

export const getIfIncorrectPassword = (state) => {
	return state.userReducer.incorrectPassword;
};

