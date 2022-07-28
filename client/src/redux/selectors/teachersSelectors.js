import filter from "lodash/filter";
import find from "lodash/find";

export const getSelectedTeachers = (state, subjects) => {
    const teachers = state.teachersReducer.teachers;
    return filter(teachers, teacher => teacher.subjects.some(sub => subjects.indexOf(sub) >= 0));
}

export const getChosenTeacher = (state) => {
    const chosenId = state.teachersReducer.chosenTeacher;
    const teachers = state.teachersReducer.teachers;
    return (find(teachers, teacher => teacher.id === chosenId * 1));
}

export const getAreTeachersFetched = (state) => {
    return JSON.stringify(state.teachersReducer.teachers) !== '{}' ? true : false;
}