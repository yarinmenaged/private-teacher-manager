import ACTIONS from './actionConstants';
import EventService from '../../services/EventService';

export const GetEvents = (id, week) => {
    return async(dispatch) => {
        const events = await EventService.GetEvents(id, week);
        dispatch({ type: ACTIONS.GET_EVENTS, payload: events});
    };
}


export const GetEventsAction = (id, week) => {
    return (dispatch) => {
        dispatch(GetEvents(id, week));
    };
}
