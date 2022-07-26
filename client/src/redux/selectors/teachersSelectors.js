export const getAllTeachers = (state) => {
    return state.teachersReducer.teachers;
}

export const getChoosenTeacher = (state) => {
    const index = state.teachersReducer.chosenTeacher;
    return state.teachersReducer.teachers[index];
}