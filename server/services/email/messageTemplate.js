const masseges = {
	AppName: "Private Teacher App",
	canceledLesson: `has been <span color="red">canceled</span>.<br/>`,
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
		<a style="margin-left:15px" href="mailto:${student.Email}"><img width="50" height="50" src="cid:sendEmailLogo"></a>
		<a style="margin-left:15px" href=https://api.WhatsApp.com/send?phone=${student.Phone}><img width="50" height="50" src="cid:whatsappLogo"></a><br/><br/>
    ${masseges.AppName}`,
		summary: `A new lesson is scheduled by ${student.Name}`,
	};
};

const canceledLessonTeacherMessage = (
	student,
	teacher,
	lessonDate,
	lessonTime
) => {
	return {
		subject: `lesson was cancelled`,
		text: `Hi ${teacher.Name},<br/>
    Lesson was scheduled for you by ${student.Name}<br/><br/>
    Date: ${lessonDate}<br>
    Time: ${lessonTime}<br>
    ${masseges.canceledLesson}<br/><br/>
		<a style="margin-left:15px" href="mailto:${student.Email}"><img width="50" height="50" src="cid:sendEmailLogo"></a>
		<a style="margin-left:15px" href=https://api.WhatsApp.com/send?phone=${student.Phone}><img width="50" height="50" src="cid:whatsappLogo"></a><br/><br/>
    ${masseges.AppName}`,
		summary: `lesson is scheduled by ${student.Name} was cancelled`,
	};
};

const canceledLessonStudentMessage = (
	student,
	teacher,
	lessonDate,
	lessonTime
) => {
	return {
		subject: `your lesson was cancelled`,
		text: `Hi ${student.Name},<br/>
    Lesson was scheduled to:<br/><br/>
    Date: ${lessonDate}<br>
    Time: ${lessonTime}<br>
    with ${teacher.Name} ${masseges.canceledLesson} ${masseges.canceledLessonStudent}<br/><br/>
		<a style="margin-left:15px" href="mailto:${teacher.Email}"><img width="50" height="50" src="cid:sendEmailLogo"></a>
		<a style="margin-left:15px" href=https://api.WhatsApp.com/send?phone=${teacher.Phone}><img width="50" height="50" src="cid:whatsappLogo"></a><br/><br/>
    ${masseges.AppName}`,
		summary: `lesson is scheduled by you was cancelled`,
	};
};

module.exports = {
	addingLessonTeacherMessage,
	canceledLessonTeacherMessage,
	canceledLessonStudentMessage,
};
