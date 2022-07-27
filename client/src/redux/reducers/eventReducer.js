import moment from 'moment';
import ACTIONS from '../actions/actionConstants';
import ReduxContents from '../Constants';

const initState = {
    events: [],
    deleted_event: {}
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;

    switch(type){
        case ACTIONS.GET_EVENTS:
            return { ...state, events: payload };
        case ACTIONS.ADD_EVENT:
            const format_date = payload.date.format(ReduxContents.DATE_FORMAT);
            const format_date_with_hour = moment(`${format_date} ${payload.hour}`).format(ReduxContents.DATE_TIME_FORMAT);
            return { ...state,
                events: [ ...state.events, { 
                    TeacherId: payload.user_id,
                    date: format_date_with_hour,
                    StudentId: null,
                    SubjectId: null,
                    student: null
                }] };
        case ACTIONS.DELETE_EVENT:
            if(!payload){
                state.events.pop();
                return { events: state.events };
            }else{
                return { 
                    deleted_event: state.events.find((value) => {
                        return value.id === payload;
                    }), 
                    events: state.events.filter((value) => {
                        return value.id !== payload;
                    })};
            }
        case ACTIONS.RESTORE_EVENT:
            return { events: [ ...state.events, state.deleted_event ], deleted_event: {} };
        default:
            return state;
    }
};

export default reducer;