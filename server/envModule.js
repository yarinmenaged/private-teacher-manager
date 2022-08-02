
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
	PORT: process.env.PORT,
	ONE_DAY_MILLISECONDS: process.env.ONE_DAY_MILLISECONDS,
};
