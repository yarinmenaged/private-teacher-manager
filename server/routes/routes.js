const express = require("express");
const {
	addStudent,
	addTeacher,
	loginRouter,
	setAbout,
} = require("./userRoutes");

const router = express.Router();
router.post("/teachers", addTeacher);
router.post("/students", addStudent);
router.post("/login", loginRouter);
router.put("/about/:id", setAbout);

module.exports = router;
