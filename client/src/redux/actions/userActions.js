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

const editPrice = (newPrice) => ({
  type: ACTIONS.EDIT_PRICE,
  payload: newPrice,
});

export const editPriceAction = (newPrice) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const id = state.userReducer.id;
      dispatch(editPrice(newPrice));
      await serverConnection.editPrice(id, newPrice);
    } catch (error) {
      dispatch(editPrice(0));
    }
  };
};

const getUserInfo = (userInfo) => ({
	type: ACTIONS.GET_USER,
	payload: userInfo,
});

export const getUserInfoAction = (email, password) => {
<<<<<<< HEAD
	return async (dispatch) => {
		const userInfo = await serverConnection.getUserInfo(email, password);
		await dispatch(getUserInfo(userInfo));
	};
=======
  return async (dispatch) => {
    const userInfo = await serverConnection.getUserInfo(email, password);
    await dispatch(getUserInfo(userInfo));
  };
>>>>>>> 84eeb01b0d4ba5ce8bf3e6c538d7a58ee1eba605
};

const getUserInfoByToken = (userInfo) => ({
	type: ACTIONS.GET_USER_BY_TOKEN,
	payload: userInfo,
});

export const getUserInfoByTokenAction = () => {
	return async (dispatch) => {
		const userInfo = await serverConnection.getUserInfoByToken();
		if (!userInfo) {
			logOut();
			return "you have to relogin";
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

const addSubject = (newSubject) => ({
<<<<<<< HEAD
	type: ACTIONS.ADD_SUBJECT,
	payload: newSubject,
});

export const addSubjectAction = (subject) => {
	return async (dispatch, getState) => {
		const state = getState();
		const userId = state.userReducer.id;
		await serverConnection.addSubject(userId, subject.id);
		const newSubject = { id: subject.id, Name: subject.value };
		dispatch(addSubject(newSubject));
	};
};

const removeSubject = (removedSubject) => ({
	type: ACTIONS.REMOVE_SUBJECT,
	payload: removedSubject,
});

export const removeSubjectAction = (subject) => {
	return async (dispatch, getState) => {
		const state = getState();
		const userId = state.userReducer.id;
		await serverConnection.removeSubject(userId, subject.id);
		const removedSubject = { id: subject.id, Name: subject.value };
		dispatch(removeSubject(removedSubject));
	};
=======
  type: ACTIONS.ADD_SUBJECT,
  payload: newSubject,
});

export const addSubjectAction = (subject) => {
  return async (dispatch, getState) => {
    const state = getState();
    const userId = state.userReducer.id;
    await serverConnection.addSubject(userId, subject.id);
    const newSubject = { id: subject.id, Name: subject.value };
    dispatch(addSubject(newSubject));
  };
};

const removeSubject = (removedSubject) => ({
  type: ACTIONS.REMOVE_SUBJECT,
  payload: removedSubject,
});

export const removeSubjectAction = (subject) => {
  return async (dispatch, getState) => {
    const state = getState();
    const userId = state.userReducer.id;
    await serverConnection.removeSubject(userId, subject.id);
    const removedSubject = { id: subject.id, Name: subject.value };
    dispatch(removeSubject(removedSubject));
  };
>>>>>>> 84eeb01b0d4ba5ce8bf3e6c538d7a58ee1eba605
};
