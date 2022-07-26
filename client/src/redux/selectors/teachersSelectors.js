export const getAllTeachers = (state) => {
    return state.teachersReducer.teachers;
}

/*export const getSelectedTeachers = (state) => {
    return state.teachersReducer.teachers.filter(teacher => teacher.subjects.includes());
}*/

export const getChoosenTeacherIndex = (state) => {
    return state.teachersReducer.chosenTeacher;
}

export const getChoosenTeacher = (state) => {
    const index = state.teachersReducer.chosenTeacher;
    return state.teachersReducer.teachers[index];
}