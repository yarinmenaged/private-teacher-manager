const express = require("express");
const SettingsController = require("../controllers/settingsController");

const router = express.Router();

router.get("/settings", SettingsController.getTeacherSettings);
router.post("/settings", SettingsController.addTeachersSettings);

module.exports = router;
