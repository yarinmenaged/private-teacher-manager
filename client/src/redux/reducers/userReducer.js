import ACTIONS from "../actions/actionConstants";

const initState = { // user info. shoud get it from server!
    Name: "yarin",
    Email: "yarinmenaged@gmail.com",
    Phone: "0509209192",
    Type: "Teacher",
    About: "i`m yarin and i`m studying in mondayU."
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.EDIT_ABOUT:
            return { ...state, About: payload }

        default:
            return state;
    }
}

export default reducer;