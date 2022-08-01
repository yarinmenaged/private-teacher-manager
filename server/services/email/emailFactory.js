const { emailSender } = require("./mail");
const {
	addingLessonTeacherMessage,
	canceledLessonTeacherMessage,
	canceledLessonStudentMessage,
} = require("./messageTemplate");
const { GetUserInfo } = require("../storage/UserStorageService");
const moment = require("moment");
const { GetEventsByEventId } = require("../storage/EventStorageService");

const getUsersInfobyIds = async (teacherId, studentId) => {
	const teacherInfo = await GetUserInfo(teacherId);
	const studentInfo = await GetUserInfo(studentId);
	return { teacherInfo, studentInfo };
};

const generateAddingLessonEmailToTeacher = async (
	studentId,
	teacherId,
	lessonDate = "",
	lessonTime
) => {
	const { studentInfo, teacherInfo } = await getUsersInfobyIds(
		teacherId,
		studentId
	);
	const date = moment.utc(lessonDate).format("DD/MM/YYYY");
	const { text, subject } = addingLessonTeacherMessage(
		teacherInfo.Name,
		studentInfo.Name,
		date,
		lessonTime
	);

	emailSender(teacherInfo.Email, subject, text);
};

const generateCanceledLessonEmailToTeacher = (student, teacher, date) => {
	const lessonDate = moment.utc(date).format("DD/MM/YYYY");
	const lessonTime = moment.utc(date).format("HH:mm");

	const { text, subject } = canceledLessonTeacherMessage(
		student.UserInfo.Name,
		teacher.UserInfo.Name,
		lessonDate,
		lessonTime
	);

	emailSender(teacher.UserInfo.Email, subject, text);
};

const generateCanceledLessonEmailToStudent = (student, teacher, date) => {
	const lessonDate = moment.utc(date).format("DD/MM/YYYY");
	const lessonTime = moment.utc(date).format("HH:mm");
	const { text, subject } = canceledLessonStudentMessage(
		teacher.UserInfo.Name,
		student.UserInfo.Name,
		lessonDate,
		lessonTime
	);
	emailSender(student.UserInfo.Email, subject, text);
};

const sendEmailDeleteEvent = async (eventId) => {
	const event = await GetEventsByEventId(eventId);
	generateCanceledLessonEmailToTeacher(
		event.Student,
		event.Teacher,
		event.date
	);
	generateCanceledLessonEmailToStudent(
		event.Student,
		event.Teacher,
		event.date
	);
	emailSender(event.Teacher.UserInfo.Email, subjectToTeacher, textToTeacher);
	emailSender(event.Student.UserInfo.Email, subjectToStudent, textToStudent);
};
module.exports = {
	generateAddingLessonEmailToTeacher,
	sendEmailDeleteEvent,
};
