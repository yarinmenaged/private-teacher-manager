export const getSelectedSubjects = (state) => {
    return state.subjectsReducer.selectedSubjects;
}

export const getSubjects = (state) => {
    return state.subjectsReducer.allSubjects;
}