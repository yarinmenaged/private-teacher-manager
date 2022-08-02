const express = require("express");
const SubjectsController = require("../controllers/subjectController");
const { authVerify } = require("../services/auth/auth");

const router = express.Router();

router.get("/", authVerify, SubjectsController.GetAllSubjects);
router.post("/:id", SubjectsController.addSubject);
router.post("/remove/:id", SubjectsController.deleteSubject);



module.exports = router;
