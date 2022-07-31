const dotenv = require("dotenv");
dotenv.config();

module.exports = {
	PORT: process.env.PORT,
	MAIL_SERVICE: process.env.MAIL_SERVICE,
	PRIVARE_TEACHER_MAIL: process.env.PRIVARE_TEACHER_MAIL,
	PRIVARE_TEACHER_PASSWORD: process.env.PRIVARE_TEACHER_PASSWORD,
};
