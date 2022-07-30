import serverConnection from '../../services/dbServices'
import ACTIONS from './actionConstants';

const selectSubject = (newSubject) => ({
    type: ACTIONS.SELECT_SUBJECT,
    payload: newSubject
});

export const selectSubjectAction = (subject) => {
    return (dispatch) => {
        const newSubject = { id: subject.id, Name: subject.value }
        dispatch(selectSubject(newSubject));
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

const resetSubjects = () => ({
    type: ACTIONS.RESET_SUBJECTS,
});

export const resetSubjectsAction = () => {
    return (dispatch) => {
        dispatch(resetSubjects());
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
