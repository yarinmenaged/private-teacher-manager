import ACTIONS from './actionConstants';

const selectSubject = (subject) => ({
    type: ACTIONS.SELECT_SUBJECT,
    payload: subject
});

export const selectSubjectAction = (subject) => {
    return async(dispatch) => {
        dispatch(selectSubject(subject));
    };
}

const deselectSubject = (subject) => ({
    type: ACTIONS.DESELECT_SUBJECT,
    payload: subject
});

export const deselectSubjectAction = (subject) => {
    return async(dispatch) => {
        dispatch(deselectSubject(subject));
    };
}

const onlyOneOption = () => ({
    type: ACTIONS.ONLY_ONE,
});

export const onlyOneOptionAction = () => {
    return async(dispatch) => {
        dispatch(onlyOneOption());
    };
}