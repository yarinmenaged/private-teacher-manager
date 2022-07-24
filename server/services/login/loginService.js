const { UserInfo, sequelize } = require("../../db/models");
const auth = require("../auth/auth");
const { getUserInfoByEmail } = require("../storage/UserStorageService");

const login = async (email, password) => {
	const currentUserInfo = await getUserInfoByEmail(email);
	if (currentUserInfo) {
		if (currentUserInfo.Password === password) {
			const token = await auth.sign(currentUserInfo);
			return { userData: currentUserInfo.dataValues, token };
		}
	}
	return { status: "Incorrect email or password" };
};
module.exports = { login };
