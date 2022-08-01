import ACTIONS from "./actionConstants";
import EventService from "../../services/EventService";
import ReduxContents from "../Constants";
import crypto from "crypto-js";

const GetEvents = (id, week) => {
	return async (dispatch) => {
		const events = await EventService.GetEvents(id, week);
		dispatch({ type: ACTIONS.GET_EVENTS, payload: events });
	};
};

const AddEvent = (user_id, date, hour, user_type, teacher_id, subject_id) => {
	return async (dispatch) => {
		try {
			const hash_id = crypto
				.SHA512(
					`${date} ${hour} ${user_type} ${teacher_id} ${subject_id} ${user_id}`
				)
				.toString();
			if (user_type === ReduxContents.USER_TYPE.Teacher) {
				if (teacher_id === user_id)
					dispatch({
						type: ACTIONS.ADD_EVENT,
						payload: { user_id, date, hour, hash_id },
					});
				else
					dispatch({
						type: ACTIONS.ADD_EVENT,
						payload: { user_id, date, hour, teacher_id, hash_id },
					});
				const event = await EventService.AddBlockedEvent(date, hour);
				dispatch({ type: ACTIONS.UPDATE_EVENT, payload: { event, hash_id } });
			} else if (user_type === ReduxContents.USER_TYPE.Student && teacher_id) {
				dispatch({
					type: ACTIONS.ADD_EVENT,
					payload: { user_id, date, hour, teacher_id, subject_id, hash_id },
				});
				const event = await EventService.AddEvent(
					date,
					hour,
					teacher_id,
					subject_id
				);
				dispatch({ type: ACTIONS.UPDATE_EVENT, payload: { event, hash_id } });
			}
		} catch (error) {
			//dispatch({ type: ACTIONS.DELETE_EVENT });
			// TODO ADD error action
		}
	};
};

const UpdateDescription = (event_id, description) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: ACTIONS.UPDATE_DESCRIPTION,
				payload: { event_id, description },
			});
			await EventService.ChangeDescription(event_id, description);
		} catch (error) {
			// show error
		}
	};
};

const DeleteEvent = (event_id) => {
	return async (dispatch) => {
		try {
			dispatch({ type: ACTIONS.DELETE_EVENT, payload: event_id });
			await EventService.DeleteEvent(event_id);
		} catch (error) {
			dispatch({ type: ACTIONS.RESTORE_EVENT });
		}
	};
};

export const GetEventsAction = (id, week) => {
	return (dispatch) => {
		dispatch(GetEvents(id, week));
	};
};

export const AddEventAction = (
	user_id,
	date,
	hour,
	user_type,
	teacher_id,
	subject_id
) => {
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
	return (dispatch) => {
		dispatch(UpdateDescription(event_id, description));
	};
};
