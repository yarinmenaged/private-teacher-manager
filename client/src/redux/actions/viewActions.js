import ACTIONS from "./actionConstants";

const Successful = (message) => ({
   type: ACTIONS.SUCCESSFUL,
   payload: message
});

const Failed = (message) => ({
    type: ACTIONS.FAILED,
    payload: message
 });

const InitView = () => ({
    type: ACTIONS.INIT_VIEW
});

 export const SuccessfulAction = () => {
    return dispatch => {
        dispatch(Successful());
    };
};

export const FailedAction = () => {
    return dispatch => {
        dispatch(Failed());
    };
};

export const InitErrorSuccessAction = () => {
    return dispatch => {
        dispatch(InitView());
    };
};