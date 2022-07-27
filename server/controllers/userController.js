const {
	AddNewTeacher,
	AddNewStudent,
	setAboutTeacher,
	getAllTeachers,
} = require("../services/storage/UserStorageService");
const { login } = require("../services/login/loginService");
const { getUserInfoByToken } = require("../services/auth/auth");
const oneDayMilliseconds = 86400000;

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
				maxAge: 5000,
				sameSite: "Lax",
			})
			.status(200)
			.send(authorizedUser);
	} catch (err) {
		next(err);
	}
};

const getUserByTokenRouter = async (req, res) => {
	const user = await getUserInfoByToken(req.cookies.token);
	if (user) {
		res.status(200).send(user);
	} else {
		res.status(401).send("Unauthorized");
	}
};

async function setAbout(req, res) {
	console.log("set about");
	await setAboutTeacher(req.params.id, req.body.newAbout);
	res.status(200).json({ health: "ok" });
}

async function getTeachers(req, res) {
	console.log("get teachers");
	const teachers = await getAllTeachers();
	res.status(200).json(teachers);
}

module.exports = {
	addTeacher,
	addStudent,
	loginRouter,
	setAbout,
	getUserByTokenRouter,
	getTeachers,
};
