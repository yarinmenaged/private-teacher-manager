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
		subject,
		text: `Hi ${teacherName},<br/>
    a new lesson was scheduled for you by ${studentName}<br/><br/>
    Date: ${lessonDate}<br>
    Time: ${lessonTime}<br>
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
		subject,
		text: `Hi ${teacherName},<br/>
    Lesson was scheduled for you by ${studentName}<br/><br/>
    Date: ${lessonDate}<br>
    Time: ${lessonTime}<br>
    ${masseges.canceledLesson}
    ${masseges.AppName}`,
	};
};

const canceledLessonStusentMessage = (
	teacherName,
	studentName,
	lessonDate,
	lessonTime
) => {
	return {
		subject,
		text: `Hi ${studentName},<br/>
    Lesson was scheduled to:<br/><br/>
    Date: ${lessonDate}<br>
    Time: ${lessonTime}<br>
    with ${teacherName} ${masseges.canceledLesson} ${masseges.canceledLessonStudent}
    ${masseges.AppName}`,
	};
};

module.exports = {
	addingLessonTeacherMessage,
	canceledLessonTeacherMessage,
	canceledLessonStusentMessage,
};
