const masseges = {
	AppName: "Private Teacher App",
	canceledLesson: `has been canceled.<br/>`,
	canceledLessonStudent: `Hope to see you soon.<br/>`,
};

const addingLessonTeacherMessage = (
	teacherName,
	studentName,
	lessonDate,
	lessonTime
) => {
	return {
		subject: "A new lesson is set now",
		text: `Hi ${teacherName},<br/>
    a new lesson was scheduled for you by ${studentName}<br/><br/>
    Date: ${lessonDate}<br>
    Time: ${lessonTime}<br><br/>
    ${masseges.AppName}`,
	};
};

const canceledLessonTeacherMessage = (
	teacherName,
	studentName,
	lessonDate,
	lessonTime
) => {
	return {
		subject: `lesson was cancelled by ${studentName}`,
		text: `Hi ${teacherName},<br/>
    Lesson was scheduled for you by ${studentName}<br/><br/>
    Date: ${lessonDate}<br>
    Time: ${lessonTime}<br>
    ${masseges.canceledLesson}<br/><br/>
    ${masseges.AppName}`,
	};
};

const canceledLessonStudentMessage = (
	teacherName,
	studentName,
	lessonDate,
	lessonTime
) => {
	return {
		subject: `your lesson was cancelled by ${teacherName}`,
		text: `Hi ${studentName},<br/>
    Lesson was scheduled to:<br/><br/>
    Date: ${lessonDate}<br>
    Time: ${lessonTime}<br>
    with ${teacherName} ${masseges.canceledLesson} ${masseges.canceledLessonStudent}<br/><br/>
    ${masseges.AppName}`,
	};
};

module.exports = {
	addingLessonTeacherMessage,
	canceledLessonTeacherMessage,
	canceledLessonStudentMessage,
};
