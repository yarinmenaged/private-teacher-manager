export const getSelectedSubjects = (state) => {
    return state.subjectsReducer.selectedSubjects;
}

export const getSubjects = (state) => {
    return state.subjectsReducer.allSubjects;
}

export const getSelectedSubjectId = state => state.subjectsReducer.selectedSubjects[0].id;
