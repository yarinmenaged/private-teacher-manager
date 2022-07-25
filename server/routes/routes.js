const express = require("express");
const { addStudent, addTeacher, loginRouter, setAbout, getTeachers } = require("./userRoutes");

const router = express.Router();

router.post("/teachers", addTeacher);
router.get("/teachers", getTeachers);
router.post("/students", addStudent);
router.post("/login", loginRouter);
router.put("/about/:id", setAbout)

module.exports = router;
