import ACTIONS from "../actions/actionConstants";

const initState = {
    teachers: {},
    chosenTeacher: {}
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {

        case ACTIONS.GET_ALL_TEACHERS:
            return { teachers: payload }

        case ACTIONS.LOG_OUT:
            return { teachers: {} }

        default:
            return state;
    }
}

export default reducer;