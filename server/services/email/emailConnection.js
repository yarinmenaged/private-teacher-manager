const nodemailer = require("nodemailer");
const moment = require("moment");
const ical = require("ical-generator");
const {
	MAIL_SERVICE,
	PRIVARE_TEACHER_MAIL,
	PRIVARE_TEACHER_PASSWORD,
} = require("../../envModule");

const createNewTransport = () => {
	const transporter = nodemailer.createTransport({
		service: MAIL_SERVICE || "hotmail",
		auth: {
			user: PRIVARE_TEACHER_MAIL || "PrivateTeacher@outlook.co.il",
			pass: PRIVARE_TEACHER_PASSWORD || "Privatet1",
		},
	});
	return transporter;
};
const createNewCalendar = (
	startTime,
	duration,
	organizer,
	summary,
	description,
	location
) => {
	const calendar = ical({ name: "Private Lesson" });
	const cal = calendar.createEvent({
		start: moment.utc(startTime),
		end: moment.utc(startTime).add(duration, "minute"),
		organizer,
		summary,
		description,
		location,
		url: "private-teachers.heroku.com",
	});
	return cal.calendar.toString();
};

const mailOptions = (sendMailTo, subject, text, calendarEvent) => {
	const calConnection = createNewCalendar(
		calendarEvent.startTime,
		calendarEvent.duration,
		calendarEvent.organizer,
		calendarEvent.summary,
		calendarEvent.description,
		calendarEvent.location
	);
	return {
		from: PRIVARE_TEACHER_MAIL || "PrivateTeacher@outlook.co.il",
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
	const mailOpt = mailOptions(sendMailTo, subject, text, calendarEvent);
	const transporter = createNewTransport();
	transporter.sendMail(mailOpt, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
	transporter.close();
};
module.exports = { emailSender };
