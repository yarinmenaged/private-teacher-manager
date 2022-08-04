const nodemailer = require("nodemailer");
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

const mailOptions = (sendMailTo, subject, text) => {
	return {
		from: PRIVARE_TEACHER_MAIL || "PrivateTeacher@outlook.co.il",
		to: sendMailTo,
		subject: subject,
		// text: text,
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
	};
};

const emailSender = async (sendMailTo, subject, text) => {
	const mailOpt = mailOptions(sendMailTo, subject, text);
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
