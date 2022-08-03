const {
  AddNewTeacher,
  AddNewStudent,
  setAboutTeacher,
  setLessonPrice,
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

const loginRouter = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userInfo = await login(email, password);
    delete userInfo.Password; //shoud not send the password back!
    res.status(200).send(userInfo);
  } catch (err) {
    console.error(err);
  }
};

async function setAbout(req, res) {
  console.log("set about");
  await setAboutTeacher(req.params.id, req.body.newAbout);
  res.status(200).json({ health: "ok" });
}

async function setPrice(req, res) {
  console.log("set PRICE");
  await setLessonPrice(req.params.id, req.body.newPrice);
  res.status(200).json({ health: "ok" });
}

module.exports = {
  addTeacher,
  addStudent,
  loginRouter,
  setAbout,
  setPrice,
};
