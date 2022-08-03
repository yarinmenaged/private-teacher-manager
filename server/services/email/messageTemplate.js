const masseges = {
	AppName: "Private Teacher App",
	canceledLesson: `has been canceled.<br/>`,
	canceledLessonStudent: `Hope to see you soon.<br/>`,
};

const addingLessonTeacherMessage = (
	teacher,
	student,
	lessonDate,
	lessonTime
) => {
	return {
		subject: "A new lesson is set now",
		text: `Hi ${teacher.Name},<br/>
    a new lesson was scheduled for you by ${student.Name}<br/><br/>
    Date: ${lessonDate}<br>
    Time: ${lessonTime}<br><br/>
    ${masseges.AppName}`,
	};
};

const canceledLessonTeacherMessage = (
	teacher,
	student,
	lessonDate,
	lessonTime
) => {
	return {
		subject: `lesson was cancelled by ${student.Name}`,
		text: `Hi ${teacher.Name},<br/>
    Lesson was scheduled for you by ${student.Name}<br/><br/>
    Date: ${lessonDate}<br>
    Time: ${lessonTime}<br>
    ${masseges.canceledLesson}<br/><br/>
		<a href="mailto:${student.Email}">Send email to the teacher</a><br/>
		<a href=https://api.WhatsApp.com/send?phone=${student.Phone}>Text the teacher via Whatsapp</a><br/><br/>
    ${masseges.AppName}`,
	};
};

const canceledLessonStudentMessage = (
	teacher,
	student,
	lessonDate,
	lessonTime
) => {
	return {
		subject: `your lesson was cancelled by ${teacher.Name}`,
		text: `Hi ${student.Name},<br/>
    Lesson was scheduled to:<br/><br/>
    Date: ${lessonDate}<br>
    Time: ${lessonTime}<br>
    with ${teacher.Name} ${masseges.canceledLesson} ${masseges.canceledLessonStudent}<br/><br/>
		<a href="mailto:${teacher.Email}">Send email to the teacher</a><br/>
		<a href=https://api.WhatsApp.com/send?phone=${teacher.Phone}>Text the teacher via Whatsapp</a><br/><br/>
    ${masseges.AppName}`,
	};
};

module.exports = {
	addingLessonTeacherMessage,
	canceledLessonTeacherMessage,
	canceledLessonStudentMessage,
};
