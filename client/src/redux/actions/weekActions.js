import ACTIONS from "./actionConstants";

const IncrementWeek = () => ({
   type: ACTIONS.ADD_WEEK
});


const DecrementWeek = () => ({
    type: ACTIONS.DECREMENT_WEEK
 });

 export const IncrementWeekAction = () => {
    return dispatch => {
        dispatch(IncrementWeek());
    };
};

export const DecrementWeekAction = () => {
    return dispatch => {
        dispatch(DecrementWeek());
    };
};