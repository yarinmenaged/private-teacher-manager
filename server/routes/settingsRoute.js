const express = require("express");
const SettingsController = require("../controllers/settingsController");
const { authVerify } = require("../services/auth/auth");

const router = express.Router();

router.get('/:id', authVerify, SettingsController.getTeacherSettingsSelectedTeacher);
router.get("/", authVerify, SettingsController.getTeacherSettings);
router.post("/", authVerify, SettingsController.setTeacherSettings);


module.exports = router;
