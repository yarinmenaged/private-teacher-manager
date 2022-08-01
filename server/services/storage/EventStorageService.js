const { UserType, TimeStampFormat } = require("./Constants");
const { Event, Sequelize, Subjects, Teacher, Student, UserInfo } = require('../../db/models');
const moment = require('moment');
const { GetTeacherById, GetStudentById } = require("./UserStorageService");
const Op = Sequelize.Op;

async function GetEventsByUserIdFilterByWeek(user_id, week, user_type) {
    const start_of_week = moment.utc().week(week).startOf('week').format(TimeStampFormat);
    const end_of_week = moment.utc().week(week).endOf('week').format(TimeStampFormat);
    let events_in_week = [];
    const were_obj = user_type === UserType.STUDENT ? { StudentId: user_id } : { TeacherId: user_id };
    events_in_week = await Event.findAll({
        include: [{
            model: Subjects,
            attributes: ["id", "Name"]
        }, {
            model: Teacher,
            include: [{
                model: UserInfo,
                attributes: ["Name", "Email", "Phone"]
            }]
        }, {
            model: Student,
            include: [{
                model: UserInfo,
                attributes: ["Name", "Email", "Phone"]
            }]
        }],
        where: {
            ...were_obj,
            date: {
                [Op.between]: [start_of_week, end_of_week]
            }
        }
    });
    return events_in_week;
}

async function GetEventsByEventId(event_id) {
    const event = await Event.findOne({
        include: [{
            model: Subjects,
            attributes: ["id", "Name"]
        }, {
            model: Teacher,
            include: [{
                model: UserInfo,
                attributes: ["Name", "Email", "Phone"]
            }]
        }, {
            model: Student,
            include: [{
                model: UserInfo,
                attributes: ["Name", "Email", "Phone"]
            }]
        }],
        where: {
            "id": event_id
        }
    });
    return event;
}

async function AddBlockedEventToTeacher(user, date) {
    const teacher = await GetTeacherById(user.id);
    const format_date = moment.utc(date);
    await Event.sequelize.query("SET FOREIGN_KEY_CHECKS = 0", null);
    const add_blocked = await Event.create({
        "date": format_date,
        "StudentId": null,
        "SubjectId": null,
        "TeacherId": teacher.id
    });
    await Event.sequelize.query("SET FOREIGN_KEY_CHECKS = 1", null);
    const event = GetEventsByEventId(add_blocked.id);
    return event;
}

async function AddEventFromStudent(student, teacher_id, date, subject_id) {
    const teacher = await GetTeacherById(teacher_id);
    const student_info = await GetStudentById(student.id);
    const add_event = await Event.create({
        "date": date,
        "StudentId": student_info.id,
        "SubjectId": subject_id,
        "TeacherId": teacher.id
    });
    const event = GetEventsByEventId(add_event.id);
    return event;
}

async function DeleteEvent(user_id, event_id){
    const student = await GetStudentById(user_id)
    const user = student ? student : await GetTeacherById(user_id);
    const event = await Event.findOne({
        where: {
            "id": event_id
        }
    });

    if(event && (event.StudentId === user.id || event.TeacherId === user.id)){
        return await event.destroy();
    }
    throw Error(`Cant delete event`);
}

async function ChangeDescription(event_id, description) {
    return await Event.update({
        "description": description
    }, {
        where: {
            "id": event_id
        }
    });
}

const EventStorageService = {
    GetEventsByUserIdFilterByWeek,
    AddBlockedEventToTeacher,
    AddEventFromStudent,
    DeleteEvent,
    ChangeDescription
};

module.exports = EventStorageService;