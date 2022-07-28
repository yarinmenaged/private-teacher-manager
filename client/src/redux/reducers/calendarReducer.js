import ACTIONS from '../actions/actionConstants';

const initState = {
    user_id: "",
    show_calender_of_other_user: false
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.SET_USER_ID_OF_CALENDAR:
            return { ...state, user_id: payload };

        case ACTIONS.SET_SHOW_CALENDER_OF_OTHER_USER:
            return { ...state, show_calender_of_other_user: true };

        case ACTIONS.UNSET_SHOW_CALENDER_OF_OTHER_USER:
            return initState;

        case ACTIONS.LOG_OUT:
            return { user_id: "", show_calender_of_other_user: false }

        default:
            return state;
    }
};

export default reducer;