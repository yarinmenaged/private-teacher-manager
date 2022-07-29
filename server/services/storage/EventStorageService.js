const { UserType, TimeStampFormat } = require("./Constants");
const {
  Event,
  Sequelize,
  Subjects,
  Teacher,
  Student,
  UserInfo,
} = require("../../db/models");
const moment = require("moment");
const SubjectsController = require("../../controllers/subjectController");
const { all } = require("../../routes/routes");
const { GetTeacherById } = require("./UserStorageService");
const Op = Sequelize.Op;

async function GetEventsByUserIdFilterByWeek(user_id, week, user_type) {
  const start_of_week = moment()
    .week(week)
    .startOf("week")
    .format(TimeStampFormat);
  const end_of_week = moment().week(week).endOf("week").format(TimeStampFormat);
  let events_in_week = [];
  if (user_type === UserType.STUDENT) {
    events_in_week = await Event.findAll({
      include: [
        {
          model: Subjects,
          attributes: ["id", "Name"],
        },
        {
          model: Teacher,
          include: [
            {
              model: UserInfo,
              attributes: ["Name", "Email", "Phone"],
            },
          ],
        },
      ],
      where: {
        StudentId: user_id,
        date: {
          [Op.between]: [start_of_week, end_of_week],
        },
      },
    });
  } else {
    events_in_week = await Event.findAll({
      include: [
        {
          model: Subjects,
          attributes: ["id", "Name"],
        },
        {
          model: Student,
          include: [
            {
              model: UserInfo,
              attributes: ["Name", "Email", "Phone"],
            },
          ],
        },
      ],
      where: {
        TeacherId: user_id,
        date: {
          [Op.between]: [start_of_week, end_of_week],
        },
      },
    });
  }
  return events_in_week;
}

async function AddBlockedEventToTeacher(user_id, date) {
  const teacher = await GetTeacherById(user_id);
  await Event.sequelize.query("SET FOREIGN_KEY_CHECKS = 0", null);
  const add_blocked = await Event.create({
    date: date,
    StudentId: null,
    SubjectId: null,
    TeacherId: teacher.id,
  });
  await Event.sequelize.query("SET FOREIGN_KEY_CHECKS = 1", null);
  return add_blocked;
}

const EventStorageService = {
  GetEventsByUserIdFilterByWeek,
  AddBlockedEventToTeacher,
};

module.exports = EventStorageService;
