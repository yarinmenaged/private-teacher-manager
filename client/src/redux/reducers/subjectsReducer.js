import ACTIONS from "../actions/actionConstants";

const initState = {
    selectedSubjects: []
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {

        case ACTIONS.SELECT_SUBJECT:
            const subjects = state.selectedSubjects;
            subjects.push(payload);
            return { selectedSubjects: subjects };

        case ACTIONS.DESELECT_SUBJECT:
            const newSubjects = state.selectedSubjects;
            const index = newSubjects.findIndex((value) => value === payload);
            newSubjects.splice(index, 1);
            return { selectedSubjects: newSubjects };

        default:
            return state;
    }
}

export default reducer;