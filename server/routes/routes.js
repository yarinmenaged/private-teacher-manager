const express = require("express");
const { authVerify } = require("../services/auth/auth");
const {
	addStudent,
	addTeacher,
	loginRouter,
	setAbout,
	getUserByTokenRouter,
} = require("./userRoutes");

const router = express.Router();
router.post("/teachers", addTeacher);
router.post("/students", addStudent);
router.post("/login", loginRouter);
router.get("/verifies", getUserByTokenRouter);
router.put("/about/:id", authVerify, setAbout);

module.exports = router;
