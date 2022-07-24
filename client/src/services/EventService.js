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

const EventService = {
    GetEvents
};

export default EventService;