export const getSelectedSubjects = (state) => {
    return state.subjectsReducer.selectedSubjects.map(subject => subject.Name);
}

export const getSubjects = (state) => {
    return state.subjectsReducer.allSubjects;
}