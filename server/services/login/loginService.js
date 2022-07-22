const { UserInfo, sequelize } = require("../../db/models");
const { getUserInfoByEmail } = require("../userInfo/userInfoService");

const login = (email, password) => {
	const currentUserInfo = getUserInfoByEmail(email);
	if (currentUserInfo) {
		const x = currentUserInfo.Password === password;
		return x;
	}
};
module.exports = { login };
