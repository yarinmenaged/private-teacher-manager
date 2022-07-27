import ACTIONS from './actionConstants';
import EventService from '../../services/EventService';
import ReduxContents from '../Constants';


const GetEvents = (id, week) => {
    return async(dispatch) => {
        const events = await EventService.GetEvents(id, week);
        dispatch({ type: ACTIONS.GET_EVENTS, payload: events});
    };
}

const AddEvent = (user_id, date, hour, user_type) => {
    return async(dispatch) => {
        try{
            if(user_type === ReduxContents.USER_TYPE.Teacher){           
                dispatch({ type: ACTIONS.ADD_EVENT, payload: { user_id, date, hour }});
                await EventService.AddBlockedEvent(user_id, date, hour);
            }
        }catch(error){
            dispatch({ type: ACTIONS.DELETE_EVENT });
            // TODO ADD error action
        }
    }
};

const DeleteEvent = (event_id) => {
    return async(dispatch) => {
        try{
            dispatch({ type: ACTIONS.DELETE_EVENT, payload: event_id });
            await EventService.DeleteEvent(event_id);
        }catch(error){
            dispatch({ type: ACTIONS.RESTORE_EVENT });
        }
    }
};


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

export const DeleteEventAction = (event_id) => {
    return async(dispatch) => {
        dispatch(DeleteEvent(event_id));
    };
};