import ACTIONS from "./actionConstants";

const chooseLocation = (location) => ({
    type: ACTIONS.CHOOSE_LOCATION,
    payload: location,
});

export const chooseLocationAction = (location) => {
    return (dispatch) => {
        dispatch(chooseLocation(location));
    };
}