const { UserType } = require("../storage/Constants");
const EventStorageService = require("../storage/EventStorageService");
const UserStorageService = require("../storage/UserStorageService");

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

const EventService = {
    GetAllEventsOfUserInWeek
};

module.exports = EventService;