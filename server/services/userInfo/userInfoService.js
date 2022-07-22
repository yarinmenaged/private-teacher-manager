const { UserInfo, sequelize } = require("../../db/models");

const getUserInfoByEmail = (Email, Password) => {
	try {
		debugger;
		return UserInfo.findAll({ where: { Email, Password } });
	} catch (err) {
		console.error(err);
	}
};
module.exports = { getUserInfoByEmail };
