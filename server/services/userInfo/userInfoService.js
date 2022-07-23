const { UserInfo, sequelize } = require("../../db/models");

const getUserInfoByEmail = async(email) => {
	try {
		return await UserInfo.findOne({
			where: {
				Email: email,
			},
			attributes: ['id', 'Name', 'Email', 'Password', 'Phone']
		});
	} catch (err) {
		console.error(err);
	}
};
module.exports = { getUserInfoByEmail };
