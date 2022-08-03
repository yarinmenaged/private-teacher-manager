const { emailSender } = require("./emailConnection");
const moment = require("moment");
const {
	addingLessonTeacherMessage,
	canceledLessonTeacherMessage,
	canceledLessonStudentMessage,
} = require("./messageTemplate");
const { GetEventsByEventId } = require("../storage/EventStorageService");

const generateAddingLessonEmailToTeacher = async (
	eventId,
	lessonDate,
	lessonTime
) => {
	const event = await GetEventsByEventId(eventId);

	const { text, subject } = addingLessonTeacherMessage(
		event.Teacher.UserInfo,
		event.Student.UserInfo,
		lessonDate,
		lessonTime
	);

	emailSender(event.Teacher.UserInfo.Email, subject, text);
};

const generateCanceledLessonEmailToTeacher = (student, teacher, date) => {
	const lessonDate = moment.utc(date).format("DD/MM/YYYY");
	const lessonTime = moment.utc(date).format("HH:mm");

	const { text, subject } = canceledLessonTeacherMessage(
		student.UserInfo,
		teacher.UserInfo,
		lessonDate,
		lessonTime
	);

	return {
		teacherEmail: teacher.UserInfo.Email,
		teacherSubject: subject,
		teacherText: text,
	};
};

const generateCanceledLessonEmailToStudent = (student, teacher, date) => {
	const lessonDate = moment.utc(date).format("DD/MM/YYYY");
	const lessonTime = moment.utc(date).format("HH:mm");
	const { text, subject } = canceledLessonStudentMessage(
		teacher.UserInfo,
		student.UserInfo,
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
	const { teacherEmail, teacherSubject, teacherText } =
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
	emailSender(teacherEmail, teacherSubject, teacherText);
	emailSender(studentEmail, studentSubject, studentTExt);
};
module.exports = {
	generateAddingLessonEmailToTeacher,
	sendEmailDeleteEvent,
};
