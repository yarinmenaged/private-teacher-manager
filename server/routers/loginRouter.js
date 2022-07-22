const express = require("express");
const { login } = require("../services/login/loginService");
const router = express.Router();

router.route("/").post((req, res) => {
	try {
		debugger;
		let { username, password } = req.body;
		let isCanLogin = login(username, password);
		res.status(200).send(isCanLogin);
	} catch (err) {
		console.error(err);
	}
});
module.exports = router;
