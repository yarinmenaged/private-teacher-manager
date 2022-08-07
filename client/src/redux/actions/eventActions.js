import ACTIONS from './actionConstants';
import EventService from '../../services/EventService';
import ReduxContents from '../Constants';
import crypto from 'crypto-js';
import ErrorSuccessMessages from '../../ErrorSuccessMessages';

const GetEvents = (id, week) => {
  return async (dispatch) => {
    const events = await EventService.GetEvents(id, week);
    dispatch({ type: ACTIONS.GET_EVENTS, payload: events });
  };
};

const AddEvent = (user_id, date, hour, user_type, teacher_id, subject_id, subject_name, lesson_length) => {
    return async(dispatch) => {
        const hash_id = crypto.SHA512(`${date} ${hour} ${user_type} ${teacher_id} ${subject_id} ${user_id}`).toString();
        try{            
            if(user_type === ReduxContents.USER_TYPE.Teacher){         
                if(teacher_id === user_id)                      
                    dispatch({ type: ACTIONS.ADD_EVENT, payload: { user_id, date, hour, hash_id, lesson_length }});
                else
                    dispatch({ type: ACTIONS.ADD_EVENT, payload: { user_id, date, hour, teacher_id, hash_id, lesson_length }});
                const event = await EventService.AddBlockedEvent(date, hour, lesson_length);
                dispatch({ type: ACTIONS.UPDATE_EVENT, payload: { event, hash_id } });
            } else if(user_type === ReduxContents.USER_TYPE.Student && teacher_id){
                dispatch({ type: ACTIONS.ADD_EVENT, payload: { user_id, date, hour, teacher_id, subject_id, subject_name, hash_id, lesson_length }});
                const event = await EventService.AddEvent(date, hour, teacher_id, subject_id, lesson_length);
                dispatch({ type: ACTIONS.UPDATE_EVENT, payload: { event, hash_id } });
            }   
        }catch(error){
            dispatch({ type: ACTIONS.DELETE_EVENT, payload: hash_id });
            dispatch({ type: ACTIONS.FAILED, payload: ErrorSuccessMessages.ADD_EVENT_ERROR });
        }
    }
}

const UpdateDescription = (event_id, description) => {
    return async(dispatch) =>{
        try{
            dispatch({ type: ACTIONS.UPDATE_DESCRIPTION, payload: { event_id, description }});
            await EventService.ChangeDescription(event_id, description);
            dispatch({ type: ACTIONS.SUCCESSFUL, payload: ErrorSuccessMessages.CHANGE_DESCRIPTION_SUCCESSFUL });
        }catch(error){
            dispatch({ type: ACTIONS.UPDATE_DESCRIPTION, payload: { event_id, description: "" }});
            dispatch({ type: ACTIONS.FAILED, payload: ErrorSuccessMessages.CHANGE_DESCRIPTION_ERROR });
        }
    }
};

const DeleteEvent = (event_id) => {
    return async(dispatch) => {
        try{
            dispatch({ type: ACTIONS.DELETE_EVENT, payload: event_id });
            await EventService.DeleteEvent(event_id);
            dispatch({ type: ACTIONS.SUCCESSFUL, payload: ErrorSuccessMessages.DELETE_SUCCESSFUL });
        }catch(error){
            dispatch({ type: ACTIONS.RESTORE_EVENT });
            dispatch({ type: ACTIONS.FAILED, payload: ErrorSuccessMessages.DELETE_ERROR });
        }
    }
};

export const GetEventsAction = (id, week) => {
  return (dispatch) => {
    dispatch(GetEvents(id, week));
  };
};

export const AddEventAction = (user_id, date, hour, user_type, teacher_id, subject_id, subject_name, lesson_length) => {
    return (dispatch) => {
        dispatch(AddEvent(user_id, date, hour, user_type, teacher_id, subject_id, subject_name, lesson_length));
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
