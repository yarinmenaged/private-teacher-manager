const { emailSender } = require("./emailConnection");
const moment = require("moment");
const {
	addingLessonTeacherMessage,
	canceledLessonTeacherMessage,
	canceledLessonStudentMessage,
} = require("./messageTemplate");
const { GetEventsByEventId } = require("../storage/EventStorageService");
const calendarType = {
	PUBLISH: "PUBLISH",
	CANCEL: "CANCEL",
};

const generateAddingLessonEmailToTeacher = async (
	eventId,
	lessonDate,
	lessonTime
) => {
	const event = await GetEventsByEventId(eventId);

	const { text, subject, summary } = addingLessonTeacherMessage(
		event.Teacher.UserInfo,
		event.Student.UserInfo,
		lessonDate,
		lessonTime
	);

	const calendarEvent = {
		startTime: event.date,
		duration: event.duration,
		organizer: event.Teacher.UserInfo.Email,
		summary,
		description: event.description,
		location: event.Teacher.UserInfo.Location,
		type: calendarType.PUBLISH,
		eventId: event.id,
		calenderEventId: event.calenderEventId,
	};
	emailSender(event.Teacher.UserInfo.Email, subject, text, calendarEvent);
};

const generateCanceledLessonEmailToTeacher = (student, teacher, date) => {
	const lessonDate = moment.utc(date).format("DD/MM/YYYY");
	const lessonTime = moment.utc(date).format("HH:mm");

	const { text, subject, summary } = canceledLessonTeacherMessage(
		student.UserInfo,
		teacher.UserInfo,
		lessonDate,
		lessonTime
	);

	return {
		teacherEmail: teacher.UserInfo.Email,
		teacherSubject: subject,
		teacherText: text,
		summary,
	};
};

const generateCanceledLessonEmailToStudent = (student, teacher, date) => {
	const lessonDate = moment.utc(date).format("DD/MM/YYYY");
	const lessonTime = moment.utc(date).format("HH:mm");
	const { text, subject } = canceledLessonStudentMessage(
		student.UserInfo,
		teacher.UserInfo,
		lessonDate,
		lessonTime
	);
	return {
		studentEmail: student.UserInfo.Email,
		studentSubject: subject,
		studentTExt: text,
	};
};

const sendEmailDeleteEvent = async (eventId) => {
	const event = await GetEventsByEventId(eventId);
	const { teacherEmail, teacherSubject, teacherText, summary } =
		generateCanceledLessonEmailToTeacher(
			event.Student,
			event.Teacher,
			event.date
		);
	const { studentEmail, studentSubject, studentTExt } =
		generateCanceledLessonEmailToStudent(
			event.Student,
			event.Teacher,
			event.date
		);
	const calendarEvent = {
		startTime: event.date,
		duration: event.duration,
		organizer: event.Teacher.UserInfo.Email,
		summary,
		description: event.description,
		location: event.Teacher.UserInfo.Location,
		type: calendarType.CANCEL,
		eventId: event.id,
		calenderEventId: event.calenderEventId,
	};
	emailSender(teacherEmail, teacherSubject, teacherText, calendarEvent);
	emailSender(studentEmail, studentSubject, studentTExt, calendarEvent);
};
module.exports = {
	generateAddingLessonEmailToTeacher,
	sendEmailDeleteEvent,
};
