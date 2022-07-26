const jwt = require("jsonwebtoken");
const jwt_secret = "someKey";
const { getUserInfoById } = require("../storage/UserStorageService");

async function sign(userDetails) {
	return await jwt.sign({ id: userDetails?.id }, jwt_secret, {
		expiresIn: 86400000,
	});
}

async function authVerify(req, res, next) {
	try {
		let token = req.cookies.token;
		if (!token) {
			res.status(401).send("Unauthorized");
		}
		const userDetails = await jwt.verify(token, jwt_secret);
		if (userDetails.id) {
			next();
		}
	} catch (err) {
		res.status(401).send("Authorization failed");
	}
}

const getUserInfoByToken = (token) => {
	const user = jwt.decode(token, jwt_secret);
	if (user) {
		const userId = user.id;
		return getUserInfoById(userId);
	}
	return null;
};

module.exports = { sign, authVerify, getUserInfoByToken };
