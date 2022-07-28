import serverConnection from '../../services/dbServices'
import ACTIONS from './actionConstants';

const selectSubject = (subject) => ({
    type: ACTIONS.SELECT_SUBJECT,
    payload: subject
});

export const selectSubjectAction = (subject) => {
    return (dispatch) => {
        dispatch(selectSubject(subject));
    };
}

const deselectSubject = (subject) => ({
    type: ACTIONS.DESELECT_SUBJECT,
    payload: subject
});

export const deselectSubjectAction = (subject) => {
    return (dispatch) => {
        dispatch(deselectSubject(subject));
    };
}

const onlyOneOption = () => ({
    type: ACTIONS.ONLY_ONE,
});

export const onlyOneOptionAction = () => {
    return (dispatch) => {
        dispatch(onlyOneOption());
    };
}

const getAllSubjects = (subjectsList) => ({
    type: ACTIONS.GET_SUBJECTS_LIST,
    payload: subjectsList
});

export const getAllSubjectsAction = () => {
    return async (dispatch) => {
        const subjectsList = await serverConnection.getAllSubjects();
        dispatch(getAllSubjects(subjectsList));
    };
}