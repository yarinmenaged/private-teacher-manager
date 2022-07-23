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
        dbConnection.editAbout(id, newAbout);
        dispatch(editAbout(newAbout));
    };
}
