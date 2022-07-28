import ACTIONS from './actionConstants';
import serverConnection from '../../services/dbServices';

const fetchTeachers = (teachersList) => ({
    type: ACTIONS.GET_ALL_TEACHERS,
    payload: teachersList
});

export const fetchTeachersAction = () => {
    return async(dispatch) => {
        const teachersList = await serverConnection.getTeacherList();
        teachersList[0].subjects = ["dance", "math"];
        teachersList[1].subjects = ["math"];
        teachersList[2].subjects = ["english", "chemistry", "math"];
        dispatch(fetchTeachers(teachersList));
    };
}

const chooseTeacher = (id) => ({
    type: ACTIONS.CHOOSE_TEACHER,
    payload: id
});

export const chooseTeacherAction = (id) => {
    return async(dispatch) => {
        dispatch(chooseTeacher(id));
    };
}

const unchooseTeacher = () => ({
    type: ACTIONS.UNCHOOSE_TEACHER,
});

export const unchooseTeacherAction = () => {
    return async(dispatch) => {
        dispatch(unchooseTeacher());
    };
}