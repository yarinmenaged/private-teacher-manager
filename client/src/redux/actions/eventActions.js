import ACTIONS from './actionConstants';
import EventService from '../../services/EventService';
import ReduxContents from '../Constants';
import moment from 'moment';


const GetEvents = (id, week) => {
    return async(dispatch) => {
        const events = await EventService.GetEvents(id, week);
        dispatch({ type: ACTIONS.GET_EVENTS, payload: events});
    };
}

const AddEvent = (user_id, date, hour, user_type) => {
    return async(dispatch) => {
        if(user_type === ReduxContents.USER_TYPE.Teacher){           
            dispatch({ type: ACTIONS.ADD_EVENT, payload: { user_id, date, hour}});
            const add_event = await EventService.AddBlockedEvent(user_id, date, hour);
        }
    }
}


export const GetEventsAction = (id, week) => {
    return (dispatch) => {
        dispatch(GetEvents(id, week));
    };
};

export const AddEventAction = (user_id, date, hour, user_type) => {
    return async(dispatch) => {
        dispatch(AddEvent(user_id, date, hour, user_type));
    };
};