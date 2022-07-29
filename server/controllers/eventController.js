const EventService = require("../services/event/eventService");

async function GetAllEventsOfUserInWeek(req, res, next) {
  try {
    const user_id = req.params.id;
    const week = req.params.week;
    const events = await EventService.GetAllEventsOfUserInWeek(user_id, week);
    return res.status(200).json({
      status: 200,
      events: events,
    });
  } catch (error) {
    next(error);
  }
}

async function AddEventBlocked(req, res, next) {
  try {
    const { user_id, date, hour } = req.body;
    const add_blocked_event = await EventService.AddEventBlockedToTeacher(
      user_id,
      date,
      hour
    );
    return res.status(200).json({
      status: 200,
      add_event_status: true,
    });
  } catch (error) {
    next(error);
  }
}

const EventsController = {
  GetAllEventsOfUserInWeek,
  AddEventBlocked,
};

module.exports = EventsController;
