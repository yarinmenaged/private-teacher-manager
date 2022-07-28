const nodemailer = require("nodemailer");
const {
	MAIL_SERVICE,
	PRIVARE_TEACHER_MAIL,
	PRIVARE_TEACHER_PASSWORD,
} = require("../../envModule");

const transporter = nodemailer.createTransport({
	service: MAIL_SERVICE || "hotmail",
	auth: {
		user: PRIVARE_TEACHER_MAIL || "PrivateTeacher@outlook.co.il",
		pass: PRIVARE_TEACHER_PASSWORD || "Privatet1",
	},
});

const mailOptions = {
	from: PRIVARE_TEACHER_MAIL || "PrivateTeacher@outlook.co.il",
	to: "aviranisa@gmail.com",
	subject: "Sending Email using Node.js",
	text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log("Email sent: " + info.response);
	}
});

module.exports;
