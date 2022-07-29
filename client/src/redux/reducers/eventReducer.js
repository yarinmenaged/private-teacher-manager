import ACTIONS from '../actions/actionConstants';

const initState = {
    events: []
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;

    switch(type){
        case ACTIONS.GET_EVENTS:
            return { events: payload };
        default:
            return state;
    }
};

export default reducer;