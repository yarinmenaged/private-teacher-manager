import ApiService from "./ApiService";

async function GetEvents(id, week) {
  try {
    const events = await ApiService.GetResourceRequest(`event/${id}/${week}`);
    return events.events;
  } catch (error) {
    //TODO error handle
    throw error;
  }
}

async function AddBlockedEvent(user_id, date, hour) {
  try {
    const add_blocked_event = await ApiService.AddNewResourceRequest(
      `event/blocked`,
      { user_id, date, hour }
    );
    return add_blocked_event.status;
  } catch (error) {
    throw error;
  }
}

const EventService = {
  GetEvents,
  AddBlockedEvent,
};

export default EventService;
