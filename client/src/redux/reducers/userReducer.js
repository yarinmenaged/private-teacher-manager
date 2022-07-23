import ACTIONS from "../actions/actionConstants";

const initState = { // user info. shoud get it from server at the login!
    id: undefined,
    Name: "",
    Email: "",
    Phone: "",
    Type: "Teacher",
    About: "i`m yarin and i`m studying in mondayU."
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {

        case ACTIONS.EDIT_ABOUT:
            return { ...state, About: payload };

        case ACTIONS.GET_USER:
            return {
                ...state,
                id: payload.id,
                Name: payload.Name,
                Email: payload.Email,
                Phone: payload.Phone
            }

        default:
            return state;
    }
}

export default reducer;