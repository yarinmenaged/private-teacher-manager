const nodemailer = require("nodemailer");
const moment = require("moment");
const ical = require("ical-generator");
const { saveCalendarId } = require("../storage/EventStorageService");
const {
	MAIL_SERVICE,
	PRIVARE_TEACHER_MAIL,
	PRIVARE_TEACHER_PASSWORD,
} = require("../../envModule");
const currentMail = {
	email: "PrivateTeacher@outlook.co.il",
	pass: "Privatet1",
};

const createNewTransport = () => {
	const transporter = nodemailer.createTransport({
		service: MAIL_SERVICE || "hotmail",
		auth: {
			user: PRIVARE_TEACHER_MAIL || "private_teacher@outlook.co.il",
			pass: PRIVARE_TEACHER_PASSWORD || currentMail.pass,
		},
	});
	return transporter;
};
const createNewCalendar = async (
	startTime,
	duration,
	organizer,
	summary,
	description,
	location,
	eventId,
	calenderEventId
) => {
	const calendar = ical({ name: "Private Lesson" });
	const cal = calendar.createEvent({
		start: moment.utc(startTime),
		end: moment.utc(startTime).add(duration, "minute"),
		organizer,
		summary,
		description,
		location,
		timezone: "israel",
		id: calenderEventId,
		url: "private-teachers.heroku.com",
	});
	if (calenderEventId) {
		cal.calendar.data.method = "CANCEL";
		// cal.data.id = calenderEventId;
	} else {
		const saveClaId = await saveCalendarId(eventId, cal.data.id);
	}
	return cal.calendar.toString();
};

const mailOptions = async (sendMailTo, subject, text, calendarEvent) => {
	const calConnection = await createNewCalendar(
		calendarEvent.startTime,
		calendarEvent.duration,
		calendarEvent.organizer,
		calendarEvent.summary,
		calendarEvent.description,
		calendarEvent.location,
		calendarEvent.eventId,
		calendarEvent.calenderEventId
	);
	return {
		from: PRIVARE_TEACHER_MAIL || "private_teacher@outlook.co.il",
		to: sendMailTo,
		subject: subject,
		html: text,
		attachments: [
			{
				filename: "whatsappLogo",
				path: __dirname + "/icons/whatsappIcon.png",
				cid: "whatsappLogo",
			},
			{
				filename: "sendEmailLogo",
				path: __dirname + "/icons/emailIcon.png",
				cid: "sendEmailLogo",
			},
		],
		icalEvent: {
			filename: "invitation.ics",
			method: calendarEvent.type,
			content: calConnection,
		},
	};
};

const emailSender = async (sendMailTo, subject, text, calendarEvent) => {
	const mailOpt = await mailOptions(sendMailTo, subject, text, calendarEvent);
	const transporter = createNewTransport();
	await transporter.sendMail(mailOpt, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
	transporter.close();
};
module.exports = { emailSender };
