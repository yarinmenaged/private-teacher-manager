import ACTIONS from "../actions/actionConstants";

const initState = {
	// user info. shoud get it from server at the login!
	loginStatus: "",
	user: null,
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
					user: payload,
				};
			}

		case ACTIONS.LOG_OUT:
			return {
				...state,
				loginStatus: "",
				user: null,
			};

		default:
			return state;
	}
};

export default reducer;
