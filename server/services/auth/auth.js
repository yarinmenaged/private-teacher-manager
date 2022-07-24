const jwt = require("jsonwebtoken");
const jwt_secret = "someKey";

async function sign(userDetails) {
	return await jwt.sign(
		{ id: userDetails?.id, Name: userDetails?.Name, Email: userDetails.Email },
		jwt_secret,
		{
			expiresIn: 86400000,
		}
	);
}

async function verify(req, res, next) {
	try {
		let token = req.cookies.token;
		if (!token) {
			res.status(401).send("Unauthorized");
		}
		let userDetails = await jwt.verify(token, jwt_secret);
		req.userDetails = userDetails;
		next();
	} catch (err) {
		next(err);
	}
}

module.exports = { sign, verify };
