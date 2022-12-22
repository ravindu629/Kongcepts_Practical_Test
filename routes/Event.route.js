const express = require("express");
const router = express.Router();
const {
  addEvent,
  getEvents,
  getEvent,
  updateEvent,
  removeEvent,
} = require("../controllers/Event.controller");

//REST api for events
//call relevant controller function according to the request type

router.get("/", getEvents);

router.get("/:id", getEvent);

router.post("/", addEvent);

router.put("/:id", updateEvent);

router.delete("/:id", removeEvent);

module.exports = router;
