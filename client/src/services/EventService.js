import ConstantsHourBlock from "../components/Schedule/CalendarContainer/HourBlock/Constants";
import ApiService from "./ApiService";

async function GetEvents(id, week) {
    try{
        const events = await ApiService.GetResourceRequest(`event/${id}/${week}`);
        return events.events;
    }catch(error){
        //TODO error handle
        throw error;
    }
}

async function AddBlockedEvent(date, hour){
    try{
        const add_blocked_event = await ApiService.AddNewResourceRequest(`event/blocked`, { date: date.utc().format(ConstantsHourBlock.DATE_FORMAT), hour });
        return add_blocked_event.event;
    }catch(error){
        throw error;
    }
}
async function AddEvent(date, hour, teacher_id, subject_id){
    try{
        const add_blocked_event = await ApiService.AddNewResourceRequest(`event`, { date: date.utc().format(ConstantsHourBlock.DATE_FORMAT), hour, teacher_id, subject_id });
        return add_blocked_event.event;
    }catch(error){
        throw error;
    }
}

async function DeleteEvent(event_id) {
    try{
        const delete_event = await ApiService.DeleteResourceRequest(`event/${event_id}`);
        return delete_event.status;
    }catch(error){
        throw error;
    }
}

async function ChangeDescription(event_id, description) {
    try{
        const update_description = await ApiService.PutResourceRequest(`event/${event_id}`, { description: description });
        return update_description.status;
    }catch(error){
        throw error;
    }
}

const EventService = {
    GetEvents, 
    AddBlockedEvent,
    DeleteEvent,
    AddEvent,
    ChangeDescription
};

export default EventService;