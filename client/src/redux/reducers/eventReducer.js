import moment from 'moment';
import ACTIONS from '../actions/actionConstants';
import ReduxContents from '../Constants';

const initState = {
    events: [],
    deleted_event: {}
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.GET_EVENTS:
            return { ...state, events: payload };
        case ACTIONS.ADD_EVENT:
            const format_date = payload.date.format(ReduxContents.DATE_FORMAT);
            const format_date_with_hour = moment.utc(`${format_date} ${payload.hour}`).format(ReduxContents.DATE_TIME_FORMAT);
            if (!payload.teacher_id)
                return {
                    ...state,
                    events: [...state.events, {
                        TeacherId: payload.user_id,
                        date: format_date_with_hour,
                        StudentId: null,
                        SubjectId: null,
                        Student: null,
                        id: payload.hash_id
                    }]
                };
            else
                return {
                    ...state,
                    events: [...state.events, {
                        TeacherId: payload.teacher_id,
                        date: format_date_with_hour,
                        StudentId: payload.user_id,
                        SubjectId: payload.subject_id,
                        Student: {
                            id: payload.user_id,
                            User_info_id: payload.user_id
                        },
                        Teacher: {
                            User_info_id: payload.teacher_id
                        },
                        Subject: {
                            id: 1,
                            Name: payload.subject_name
                        },
                        id: payload.hash_id
                    }]
                };
        case ACTIONS.DELETE_EVENT:
            if (payload) {
                return {
                    deleted_event: state.events.find((value) => {
                        return value.id === payload;
                    }),
                    events: state.events.filter((value) => {
                        return value.id !== payload;
                    })
                };
            } else {
                state.events.pop();
                return { events: state.events };
            }
        case ACTIONS.UPDATE_EVENT:
            return { ...state, events: [...state.events.filter(value => value.id !== payload.hash_id), payload.event] };
        case ACTIONS.RESTORE_EVENT:
            return { events: [...state.events, state.deleted_event], deleted_event: {} };
        case ACTIONS.UPDATE_DESCRIPTION:
            const event = state.events.find((value) => value.id === payload.event_id);
            event.description = payload.description;
            return { ...state, events: [...state.events.filter(value => value.id !== payload.event_id), event] };
        default:
            return state;
    }
};

export default reducer;