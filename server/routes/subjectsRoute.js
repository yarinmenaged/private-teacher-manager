const express = require("express");
const SubjectsController = require("../controllers/subjectController");

const router = express.Router();

router.get("/", SubjectsController.GetAllSubjects);

module.exports = router;