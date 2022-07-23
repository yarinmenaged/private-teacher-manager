import ACTIONS from './actionConstants';
import dbConnection from '../../services/dbServices';

const editAbout = (newAbout) => ({
    type: ACTIONS.EDIT_ABOUT,
    payload: newAbout
});

export const editAboutAction = (newAbout) => {
    return async(dispatch, getState) => {
        const state = getState();
        const id = state.userReducer.id;
        await dbConnection.editAbout(id, newAbout);
        dispatch(editAbout(newAbout));
    };
}

const getUserInfo = (userInfo) => ({
    type: ACTIONS.GET_USER,
    payload: userInfo
});

export const getUserInfoAction = (email, password) => {
    return async(dispatch) => {
        const userInfo = await dbConnection.getUserInfo(email, password);
        console.log(userInfo);
        dispatch(getUserInfo(userInfo));
    };
}
