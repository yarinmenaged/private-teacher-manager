const express = require("express");

const { authVerify } = require("../services/auth/auth");

const {
	addStudent,
	addTeacher,
	loginRouter,
	setAbout,
	getTeachers,
	getUserByTokenRouter,
} = require("../controllers/userController");

const router = express.Router();
router.post("/teachers", addTeacher);
router.get("/teachers", getTeachers);
router.post("/students", addStudent);
router.post("/login", loginRouter);
router.get("/verifies", getUserByTokenRouter);
router.put("/about/:id", authVerify, setAbout);

module.exports = router;
