const {
	AddNewTeacher,
	AddNewStudent,
	setAboutTeacher
} = require("../services/storage/UserStorageService");

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

const loginRouter = () => {
	try {
		debugger;
		let { username, password } = req.body;
		let isCanLogin = login(username, password);
		res.status(200).send(isCanLogin);
	} catch (err) {
		console.error(err);
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
	setAbout
};
