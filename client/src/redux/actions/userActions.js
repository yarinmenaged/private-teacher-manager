import ACTIONS from './actionConstants';
import severConnection from '../../services/dbServices';

const editAbout = (newAbout) => ({
    type: ACTIONS.EDIT_ABOUT,
    payload: newAbout
});

export const editAboutAction = (newAbout) => {
    return async(dispatch, getState) => {
        const state = getState();
        const id = state.userReducer.id;
        await severConnection.editAbout(id, newAbout);
        dispatch(editAbout(newAbout));
    };
}

const getUserInfo = (userInfo) => ({
    type: ACTIONS.GET_USER,
    payload: userInfo
});

export const getUserInfoAction = (email, password) => {
    return async(dispatch) => {
        const userInfo = await severConnection.getUserInfo(email, password);
        dispatch(getUserInfo(userInfo));
    };
}

const logOut = () => ({
    type: ACTIONS.LOG_OUT,
});

export const logOutAction = () => {
    return (dispatch) => {
        dispatch(logOut());
    };
}
