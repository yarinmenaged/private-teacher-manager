export const getUserInfo = (state) => {
    return state.userReducer;
}

export const getLoginStatus = (state) => {
    return state.userReducer.loginStatus;
}