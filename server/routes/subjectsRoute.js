const express = require("express");
const SubjectsController = require("../controllers/subjectController");
const { authVerify } = require("../services/auth/auth");

const router = express.Router();

router.get("/", authVerify, SubjectsController.GetAllSubjects);

module.exports = router;
