import ACTIONS from './actionConstants';
import EventService from '../../services/EventService';
import ReduxContents from '../Constants';


const GetEvents = (id, week) => {
    return async(dispatch) => {
        const events = await EventService.GetEvents(id, week);
        dispatch({ type: ACTIONS.GET_EVENTS, payload: events});
    };
}

const AddEvent = (user_id, date, hour, user_type, teacher_id, subject_id) => {
    return async(dispatch) => {
        try{
            if(user_type === ReduxContents.USER_TYPE.Teacher){         
                if(teacher_id === user_id)                      
                    dispatch({ type: ACTIONS.ADD_EVENT, payload: { user_id, date, hour}});
                else
                    dispatch({ type: ACTIONS.ADD_EVENT, payload: { user_id, date, hour, teacher_id }});
                await EventService.AddBlockedEvent(date, hour);
            } else if(user_type === ReduxContents.USER_TYPE.Student){
                dispatch({ type: ACTIONS.ADD_EVENT, payload: { user_id, date, hour, teacher_id, subject_id }});
                await EventService.AddEvent(date, hour, teacher_id, subject_id);
            }
        }catch(error){
            //dispatch({ type: ACTIONS.DELETE_EVENT });
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

const UpdateDescription = (event_id, description) => {
    return async(dispatch) =>{
        try{
            dispatch({ type: ACTIONS.UPDATE_DESCRIPTION, payload: { event_id, description }});
            await EventService.ChangeDescription(event_id, description);
        }catch(error){
            // show error
        }
    }
};


export const GetEventsAction = (id, week) => {
    return (dispatch) => {
        dispatch(GetEvents(id, week));
    };
};

export const AddEventAction = (user_id, date, hour, user_type, teacher_id, subject_id) => {
    return (dispatch) => {
        dispatch(AddEvent(user_id, date, hour, user_type, teacher_id, subject_id));
    };
};

export const DeleteEventAction = (event_id) => {
    return (dispatch) => {
        dispatch(DeleteEvent(event_id));
    };
};

export const UpdateDescriptionAction = (event_id, description) => {
    return dispatch => {
        dispatch(UpdateDescription(event_id, description));
    };
};