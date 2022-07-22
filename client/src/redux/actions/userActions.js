import ACTIONS from './actionConstants';

const editAbout = (newAbout) => ({
    type: ACTIONS.EDIT_ABOUT,
    payload: newAbout
});

export const editAboutAction = (newAbout) => {
    return (dispatch) => {
        dispatch(editAbout(newAbout));
    };
}
