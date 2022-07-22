const express = require("express");
const { addStudent, addTeacher } = require("./api");
const router = express.Router();

router.post('/teachers', addTeacher);
router.post('/students', addStudent);

module.exports = router;