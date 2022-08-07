const EventService = require("../services/event/eventService");
const { getUserInfoByToken } = require("../services/auth/auth");

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

async function AddEventBlocked(req, res, next){
    try{
        const { date, hour, lesson_length } = req.body;
        const user_id = await getUserInfoByToken(req.cookies.token);
        const add_blocked_event = await EventService.AddEventBlockedToTeacher(user_id, date, hour, lesson_length);
        return res.status(200).json({
            status: 200,
            add_event_status: true,
            event: add_blocked_event
        });
    }catch(error){
        next(error);
    }
}

async function AddEventFromStudent(req, res, next){
    try{
        const { teacher_id, subject_id, date, hour, lesson_length } = req.body;
        const student = await getUserInfoByToken(req.cookies.token);
        const add_event = await EventService.AddEventFromStudent(student, teacher_id, date, hour, subject_id, lesson_length);
        return res.status(200).json({
            status: 200,
            add_event_status: true,
            event: add_event
        });
    }catch(error){
        next(error);
    }
}


async function DeleteEvent(req, res, next){
    try{
        const event_id = req.params.id;
        const user = await getUserInfoByToken(req.cookies.token);
        const delete_event = await EventService.DeleteEvent(user.id, event_id);
        return res.status(200).json({
            status: 200,
            delete_event_status: true
        });
    }catch(error){
        next(error);
    }
}

async function ChangeDescription(req, res, next){
    try{
        const event_id = req.params.id;
        const user = await getUserInfoByToken(req.cookies.token);
        const description = req.body.description;
        const change_description = await EventService.ChangeDescription(event_id, user.id, description);
        return res.status(200).json({
            status: 200,
            change_event_description: true
        });
    }catch(error){
        next(error);
    }
}


const EventsController = {
    GetAllEventsOfUserInWeek,
    AddEventBlocked,
    AddEventFromStudent,
    DeleteEvent,
    ChangeDescription
};

module.exports = EventsController;
