import ACTIONS from "./actionConstants";
import serverConnection from "../../services/dbServices";

const editAbout = (newAbout) => ({
	type: ACTIONS.EDIT_ABOUT,
	payload: newAbout,
});

export const editAboutAction = (newAbout) => {
	return async (dispatch, getState) => {
		const state = getState();
		const id = state.userReducer.id;
		await serverConnection.editAbout(id, newAbout);
		dispatch(editAbout(newAbout));
	};
};

const getUserInfo = (userInfo) => ({
	type: ACTIONS.GET_USER,
	payload: userInfo,
});

export const getUserInfoAction = (email, password) => {

    return async(dispatch) => {
        const userInfo = await serverConnection.getUserInfo(email, password);
        dispatch(getUserInfo(userInfo));
    };
}

const getUserInfoByToken = (userInfo) => ({
	type: ACTIONS.GET_USER_BY_TOKEN,
	payload: userInfo,
});

export const getUserInfoByTokenAction = () => {
	return async (dispatch) => {
		const userInfo = await serverConnection.getUserInfoByToken();
		if (userInfo.Type === "Teacher") {
            userInfo.subjects = ["history", "english", "math", "physics"];
        }
		dispatch(getUserInfoByToken(userInfo));
	};
};

const logOut = () => ({
	type: ACTIONS.LOG_OUT,
});

export const logOutAction = () => {
	return (dispatch) => {
		dispatch(logOut());
	};
};
