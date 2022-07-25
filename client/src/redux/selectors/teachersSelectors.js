export const getAllTeachers = (state) => {
    return state.teachersReducer.teachers;
}

export const getChoosenTeacher = (state) => {
    return state.teachersReducer.chosenTeacher
}