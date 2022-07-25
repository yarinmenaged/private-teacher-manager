import moment from 'moment';
import ACTIONS from '../actions/actionConstants';
import ReduxContents from '../Constants';

const initState = {
    events: []
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;

    switch(type){
        case ACTIONS.GET_EVENTS:
            return { events: payload };
        case ACTIONS.ADD_EVENT:
            return { events: [ ...state.events, { 
                TeacherId: payload.user_id,
                date: `${payload.date} ${payload.hour}`,
                StudentId: null,
                SubjectId: null,
                student: null
                }] }; 
        default:
            return state;
    }
};

export default reducer;