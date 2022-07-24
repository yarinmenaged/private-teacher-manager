const EventService = require("../services/event/eventService");


async function GetAllEventsOfUserInWeek(req, res, next){
    try{
        const user_id = req.params.id;
        const week = req.params.week;
        const events = await EventService.GetAllEventsOfUserInWeek(user_id, week);
        return res.status(200).json({
            status: 200,
            events: events
        })
    }catch(error){
        next(error);
    }
}

const EventsController = {
    GetAllEventsOfUserInWeek
};

module.exports = EventsController;