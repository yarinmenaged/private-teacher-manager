const { UserType } = require("../storage/Constants");
const EventStorageService = require("../storage/EventStorageService");
const UserStorageService = require("../storage/UserStorageService");
const moment = require('moment');

async function GetAllEventsOfUserInWeek(user_id, week){
    try{
        const teacher = await UserStorageService.GetTeacherById(user_id);
        if(teacher) 
            return await EventStorageService.GetEventsByUserIdFilterByWeek(teacher.id, week, UserType.TEACHER) 
        else{
            const student = await UserStorageService.GetStudentById(user_id);
            return await EventStorageService.GetEventsByUserIdFilterByWeek(student.id, week, UserType.STUDENT);
        }
    }catch(error){
        throw error;
    }
}

async function AddEventBlockedToTeacher(user_id, date, hour){
    try{
        const format_date = moment.utc(date).format('MM-DD-YYYY');
        const formatted_date = moment.utc(`${format_date} ${hour}`).format('MM-DD-YYYY HH:mm:ss');
        return await EventStorageService.AddBlockedEventToTeacher(user_id, formatted_date);
    }catch(error){
        throw error;
    }
}

async function AddEventFromStudent(student, teacher_id, date, hour, subject_id){
    try{
        const format_date = moment.utc(date).format('MM-DD-YYYY');
        const formatted_date = moment.utc(`${format_date} ${hour}`).format('MM-DD-YYYY HH:mm:ss');
        return await EventStorageService.AddEventFromStudent(student, teacher_id, formatted_date, subject_id);
    }catch(error){
        throw error;
    }
}

async function DeleteEvent(user_id, event_id){
    try{
        return await EventStorageService.DeleteEvent(user_id, event_id);
    }catch(error){
        throw error;
    }
}

const EventService = {
    GetAllEventsOfUserInWeek,
    AddEventBlockedToTeacher,
    AddEventFromStudent,
    DeleteEvent
};

module.exports = EventService;