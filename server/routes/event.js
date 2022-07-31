const express = require("express");
const EventsController = require("../controllers/eventController");
const { authVerify } = require("../services/auth/auth");

const router = express.Router();

router.get("/:id/:week", authVerify, EventsController.GetAllEventsOfUserInWeek);
router.post("/blocked", authVerify, EventsController.AddEventBlocked);
router.post("/", authVerify, EventsController.AddEventFromStudent);
router.delete("/:id", authVerify, EventsController.DeleteEvent);
router.put("/:id", authVerify, EventsController.ChangeDescription);

module.exports = router;
