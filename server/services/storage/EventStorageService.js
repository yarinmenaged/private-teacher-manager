const { UserType, TimeStampFormat } = require("./Constants");
const { Event, Sequelize, Subjects, Teacher, Student, UserInfo } = require('../../db/models');
const moment = require('moment');
const SubjectsController = require("../../controllers/subjectController");
const { all } = require("../../routes/routes");
const Op = Sequelize.Op;

async function GetEventsByUserIdFilterByWeek(user_id, week, user_type) {
    const start_of_week = moment().week(week).startOf('week').format(TimeStampFormat);
    const end_of_week = moment().week(week).endOf('week').format(TimeStampFormat);
    let events_in_week = [];
    if (user_type === UserType.STUDENT) {
        events_in_week = await Event.findAll({
            include: [{
                model: Subjects,
                attributes: ["id", "Name"]
            },{
                model: Teacher,
                include: [{
                    model: UserInfo,
                    attributes: ["Name", "Email", "Phone"]
                }]
            }],
            where: {
                StudentId: user_id,
                date: {
                    [Op.between]: [start_of_week, end_of_week]
                }
            }
        });
    } else {
        events_in_week = await Event.findAll({
            include: [{
                model: Subjects,
                attributes: ["id", "Name"]
            },{
                model: Student,
                include: [{
                    model: UserInfo,
                    attributes: ["Name", "Email", "Phone"]
                }]
            }],
            where: {
                TeacherId: user_id,
                date: {
                    [Op.between]: [start_of_week, end_of_week]
                }
            }
        });
    }
    return events_in_week;
}

const EventStorageService = {
    GetEventsByUserIdFilterByWeek
};

module.exports = EventStorageService;