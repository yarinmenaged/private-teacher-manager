const express = require("express");
const SettingsController = require("../controllers/settingsController");
const { authVerify } = require("../services/auth/auth");

const router = express.Router();

router.get("/settings", authVerify, SettingsController.getTeacherSettings);
router.post("/settings", authVerify, SettingsController.addTeachersSettings);

module.exports = router;
