const { UserInfo, sequelize } = require("../../db/models");
const { getUserInfoByEmail } = require("../storage/UserStorageService");

const login = async (email, password) => {
	const currentUserInfo = await getUserInfoByEmail(email);
	if (currentUserInfo) {
		if (currentUserInfo.Password === password) {
			return currentUserInfo.dataValues;
		}
		return { status: "Incorrect password" };
	}
	return { status: "Incorrect email" };
};
module.exports = { login };
