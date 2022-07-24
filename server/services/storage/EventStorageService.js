const { UserType, TimeStampFormat } = require("./Constants");
const { Event, Sequelize } = require('../../db/models');
const moment = require('moment');
const Op = Sequelize.Op;

async function GetEventsByUserIdFilterByWeek(user_id, week, user_type) {
    const start_of_week = moment().week(week).startOf('week').format(TimeStampFormat);
    const end_of_week = moment().week(week).endOf('week').format(TimeStampFormat);
    let events_in_week = [];
    if (user_type === UserType.STUDENT) {
        events_in_week = await Event.findAll({
            where: {
                StudentId: user_id,
                date: {
                    [Op.between]: [start_of_week, end_of_week]
                }
            }
        });
    } else {
        events_in_week = await Event.findAll({
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