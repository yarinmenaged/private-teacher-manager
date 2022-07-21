const express = require("express");
const subjectService = require("../services/SubjectsService/SubjectsSevice");
const router = express.Router();

router.route("/:id").get(async (req, res) => {
	try {
		const subjectId = parseInt(req.params.id);
		const currentSubject = await subjectService.getSubjectById(req.params.id);
		res.status(200).send(currentSubject);
	} catch (err) {
		res.status(500);
		console.error(err);
	}
});

router.route("/").post(async (req, res) => {
	try {
		debugger;
		const subjectAdded = await subjectService.addSubject(req.body);
		res.status(201).send(subjectAdded);
	} catch (err) {
		res.status(500).send(err);
		console.error(err);
	}
});
module.exports = router;
