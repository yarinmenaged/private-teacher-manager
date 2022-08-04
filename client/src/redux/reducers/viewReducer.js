import ACTIONS from '../actions/actionConstants';

const initState = {
    successful: false,
    failed: false,
    message: ""
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.SUCCESSFUL:
            return { failed: false, successful: true, message: payload };
        case ACTIONS.FAILED:
            return { failed: true, successful: false, message: payload };
        case ACTIONS.INIT_VIEW:
            return { ...initState };
        default:
            return state;
    }
};

export default reducer;