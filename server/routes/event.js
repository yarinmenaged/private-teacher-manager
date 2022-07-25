const express = require("express");
const EventsController = require("../controllers/eventController");

const router = express.Router();

router.get("/:id/:week", EventsController.GetAllEventsOfUserInWeek);
router.post("/blocked", EventsController.AddEventBlocked);

module.exports = router;