const { UserType } = require("../storage/Constants");
const EventStorageService = require("../storage/EventStorageService");
const UserStorageService = require("../storage/UserStorageService");
const moment = require("moment");
const EventServiceConstants = require("./Constants");

async function GetAllEventsOfUserInWeek(user_id, week) {
  try {
    const teacher = await UserStorageService.GetTeacherById(user_id);
    if (teacher)
      return await EventStorageService.GetEventsByUserIdFilterByWeek(
        teacher.id,
        week,
        UserType.TEACHER
      );
    else {
      const student = await UserStorageService.GetStudentById(user_id);
      return await EventStorageService.GetEventsByUserIdFilterByWeek(
        student.id,
        week,
        UserType.STUDENT
      );
    }
  } catch (error) {
    throw error;
  }
}

async function AddEventBlockedToTeacher(user_id, date, hour, lesson_length){
    try{
        const format_date = moment.utc(date).format(EventServiceConstants.DATE_FORMAT);
        const formatted_date = moment.utc(`${format_date} ${hour}`).format(EventServiceConstants.DATE_WITH_TIME_FORMAT);
        return await EventStorageService.AddBlockedEventToTeacher(user_id, formatted_date, lesson_length);
    }catch(error){
        throw error;
    }
}

async function AddEventFromStudent(student, teacher_id, date, hour, subject_id, lesson_length){
    try{
        const format_date = moment.utc(date).format(EventServiceConstants.DATE_FORMAT);
        const formatted_date = moment.utc(`${format_date} ${hour}`).format(EventServiceConstants.DATE_WITH_TIME_FORMAT);
        return await EventStorageService.AddEventFromStudent(student, teacher_id, formatted_date, subject_id, lesson_length);
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

async function ChangeDescription(event_id, user_id, description) {
    try{
        const teacher = await UserStorageService.GetTeacherById(user_id);
        if(teacher) 
            return await EventStorageService.ChangeDescription(event_id, description);
        else{
            const error = new Error(`Only teacher can change description of event`);
            error.statusCode = 401;
            throw error;
        }
    }catch(error){
        throw error;
    }
}

const EventService = {
    GetAllEventsOfUserInWeek,
    AddEventBlockedToTeacher,
    AddEventFromStudent,
    DeleteEvent,
    ChangeDescription
};

module.exports = EventService;
