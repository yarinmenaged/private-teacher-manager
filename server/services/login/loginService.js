const { UserInfo, sequelize } = require("../../db/models");
const { getUserInfoByEmail } = require("../userInfo/userInfoService");

const login = async (email, password) => {
	const currentUserInfo = await getUserInfoByEmail(email);
	if (currentUserInfo) {
		if (currentUserInfo.Password === password) { 
			return currentUserInfo.dataValues;
		} else {
			return null;
		}
	}
};
module.exports = { login };
