export const getSelectedSubjects = (state) => {
    return state.sabjectsReducer.selectedSubjects.map(subject => subject.Name);
}

export const getSubjects = (state) => {
    return state.sabjectsReducer.allSubjects;
}