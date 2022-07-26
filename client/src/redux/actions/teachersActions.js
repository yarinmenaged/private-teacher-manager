import ACTIONS from './actionConstants';
import serverConnection from '../../services/dbServices';

const fetchTeachers = (teachersList) => ({
    type: ACTIONS.GET_ALL_TEACHERS,
    payload: teachersList
});

export const fetchTeachersAction = () => {
    return async(dispatch) => {
        const teachersList = await serverConnection.getTeacherList();
        dispatch(fetchTeachers(teachersList));
    };
}

const chooseTeacher = (index) => ({
    type: ACTIONS.CHOOSE_TEACHER,
    payload: index
});

export const chooseTeacherAction = (index) => {
    return async(dispatch) => {
        dispatch(chooseTeacher(index));
    };
}