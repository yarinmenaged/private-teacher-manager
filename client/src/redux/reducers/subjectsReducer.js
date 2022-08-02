import ACTIONS from "../actions/actionConstants";

const initState = {
    selectedSubjects: [],
    allSubjects: [],
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {

        case ACTIONS.GET_SUBJECTS_LIST:
            return { ...state, allSubjects: payload };

        case ACTIONS.SELECT_SUBJECT:
            const subjects = state.selectedSubjects;
            subjects.push(payload);
            return { ...state, selectedSubjects: subjects };

        case ACTIONS.DESELECT_SUBJECT:
            const newSubjects = state.selectedSubjects;
            const index = newSubjects.findIndex((value) => value.Name === payload);
            newSubjects.splice(index, 1);
            return { ...state, selectedSubjects: newSubjects };

        case ACTIONS.RESET_SUBJECTS:
            return { ...state, selectedSubjects: [] };

        case ACTIONS.LOG_OUT:
            return { selectedSubjects: [], allSubjects: [] };

        default:
            return state;
    }
}

export default reducer;