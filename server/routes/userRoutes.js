const {
	AddNewTeacher,
	AddNewStudent,
	setAboutTeacher,
} = require("../services/storage/UserStorageService");
const { login } = require("../services/login/loginService");

async function addTeacher(req, res) {
	console.log("create teacher");
	const newTeacher = await AddNewTeacher(req.body);
	res.status(200).json(newTeacher);
}

async function addStudent(req, res) {
	console.log("create student");
	const newStudent = await AddNewStudent(req.body);
	res.status(200).json(newStudent);
}

const loginRouter = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const authorizedUser = await login(email, password);
		// delete authorizedUser.userData.Password; //shoud not send the password back!
		res
			.cookie("token", authorizedUser.token, {
				maxAge: 86400000,
				httpOnly: true,
				sameSite: "Lax",
			})
			.status(200)
			.send(authorizedUser);
	} catch (err) {
		next(err);
	}
};

async function setAbout(req, res) {
	console.log("set about");
	await setAboutTeacher(req.params.id, req.body.newAbout);
	res.status(200).json({ health: "ok" });
}

module.exports = {
	addTeacher,
	addStudent,
	loginRouter,
	setAbout,
};
