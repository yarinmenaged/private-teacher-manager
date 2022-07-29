const { UserType } = require("../storage/Constants");
const EventStorageService = require("../storage/EventStorageService");
const UserStorageService = require("../storage/UserStorageService");
const moment = require("moment");

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

async function AddEventBlockedToTeacher(user_id, date, hour) {
  try {
    const format_date = moment(date).format("MM-DD-YYYY");
    const formatted_date = new Date(`${format_date} ${hour}`);
    return await EventStorageService.AddBlockedEventToTeacher(
      user_id,
      formatted_date
    );
  } catch (error) {
    throw error;
  }
}

const EventService = {
  GetAllEventsOfUserInWeek,
  AddEventBlockedToTeacher,
};

module.exports = EventService;
