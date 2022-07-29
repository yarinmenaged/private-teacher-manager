import ACTIONS from './actionConstants';

const SetCalendarToUser = (user_id) => {
    return (dispatch) => {
        dispatch({ type: ACTIONS.SET_USER_ID_OF_CALENDAR, payload: user_id });
        dispatch({ type: ACTIONS.SET_SHOW_CALENDER_OF_OTHER_USER });
    };
};

export const SetCalendarToUserAction = (user_id) => {
    return (dispatch) => {
        dispatch(SetCalendarToUser(user_id));
    };
};

const UnsetCalendarToUser = () => {
    return (dispatch) => {
        dispatch({ type: ACTIONS.SET_USER_ID_OF_CALENDAR, payload: "" });
        dispatch({ type: ACTIONS.UNSET_SHOW_CALENDER_OF_OTHER_USER });
    };
};

export const UnsetCalendarToUserAction = () => {
    return (dispatch) => {
        dispatch(UnsetCalendarToUser());
    };
};