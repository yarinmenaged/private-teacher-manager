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
            return { teachers: {}, chosenTeacher: undefined };

        case ACTIONS.CHOOSE_TEACHER:
            return { ...state, chosenTeacher: payload }

        case ACTIONS.UNCHOOSE_TEACHER:
            return { ...state, chosenTeacher: undefined }

        default:
            return state;
    }
}

export default reducer;