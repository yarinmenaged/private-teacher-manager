import ACTIONS from "./actionConstants";

const AddWeek = () => ({
   type: ACTIONS.ADD_WEEK
});


const DecrementWeek = () => ({
    type: ACTIONS.DECREMENT_WEEK
 });

 export const AddWeekAction = () => {
    return dispatch => {
        dispatch(AddWeek());
    };
};

export const DecrementWeekAction = () => {
    return dispatch => {
        dispatch(DecrementWeek());
    };
};