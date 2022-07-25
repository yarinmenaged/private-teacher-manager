import ACTIONS from "../actions/actionConstants";

const initState = {
    teachers: {},
    chosenTeacher: undefined
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {

        case ACTIONS.GET_ALL_TEACHERS:
            return { ...state, teachers: payload };

        case ACTIONS.LOG_OUT:
            return { ...state, teachers: {} };

        case ACTIONS.CHOOSE_TEACHER:
            return { ...state, chosenTeacher: payload * 1}

        default:
            return state;
    }
}

export default reducer;