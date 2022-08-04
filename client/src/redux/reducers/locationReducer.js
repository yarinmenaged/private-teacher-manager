import ACTIONS from "../actions/actionConstants";

const initState = {
    chosenLocation: "All locations",
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {

        case ACTIONS.CHOOSE_LOCATION:
            return { chosenLocation: payload };

        case ACTIONS.LOG_OUT:
            return { chosenLocation: "All locations" }

        default:
            return state;
    }
}

export default reducer;