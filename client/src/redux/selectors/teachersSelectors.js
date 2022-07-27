import { filter } from "lodash";

export const getSelectedTeachers = (state, subjects) => {
    const teachers = state.teachersReducer.teachers;
    return filter(teachers, teacher => teacher.subjects.some(sub => subjects.indexOf(sub) >= 0));
}

export const getChoosenTeacherIndex = (state) => {
    return state.teachersReducer.chosenTeacher;
}

export const getChoosenTeacher = (state) => {
    const index = state.teachersReducer.chosenTeacher;
    return state.teachersReducer.teachers[index];
}