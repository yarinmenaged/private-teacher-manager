const { UserType } = require("../storage/Constants");
const EventStorageService = require("../storage/EventStorageService");
const UserStorageService = require("../storage/UserStorageService");

async function GetAllEventsOfUserInWeek(user_id, week){
    try{
        const teacher = UserStorageService.GetTeacherById(user_id);
        return teacher ? 
            await EventStorageService.GetEventsByUserIdFilterByWeek(user_id, week, UserType.TEACHER) 
            :
            await EventStorageService.GetEventsByUserIdFilterByWeek(user_id, week, UserType.STUDENT);
    }catch(error){
        throw error;
    }
}

const EventService = {
    GetAllEventsOfUserInWeek
};

module.exports = EventService;