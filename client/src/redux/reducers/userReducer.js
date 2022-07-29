import ACTIONS from "../actions/actionConstants";

const initState = { // user info. shoud get it from server at the login!
    loginStatus: "",
    id: undefined,
    Name: "",
    Email: "",
    Phone: "",
    Type: "",
    About: ""
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {

        case ACTIONS.EDIT_ABOUT:
            return { ...state, About: payload };

        case ACTIONS.GET_USER:
            if (payload.status) {
                return { ...state, loginStatus: payload.status };
            } else {
                return {
                    ...state,
                    loginStatus: "in",
                    id: payload.id,
                    Name: payload.Name,
                    Email: payload.Email,
                    Phone: payload.Phone,
                    Type: payload.Type,
                    About: payload.About
                };
            }

        case ACTIONS.LOG_OUT:
            return {
                ...state,
                loginStatus: "",
                id: undefined,
                Name: "",
                Email: "",
                Phone: "",
                Type: "",
                About: ""
            };

        default:
            return state;
    }
}

export default reducer;