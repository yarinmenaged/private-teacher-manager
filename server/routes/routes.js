const express = require("express");
const { addStudent, addTeacher, loginRouter } = require("./userRoutes");

const router = express.Router();

router.post("/teachers", addTeacher);
router.post("/students", addStudent);
router.post("/login", loginRouter);

module.exports = router;
