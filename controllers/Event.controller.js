const Event = require("../models/Event.model");

//Controlling functions for events

//Add a new event
const addEvent = (req, res) => {
  const { postedTime, description, owner, title, imageUrl } = req.body;

  const event = new Event({
    postedTime,
    description,
    owner,
    title,
    imageUrl,
  });

  event
    .save()
    .then((createdEvent) => {
      res.json(createdEvent);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(400).json(error);
  }
};

//get a specific event
const getEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Event.findById(eventId);
    res.json(event);
  } catch (error) {
    res.status(400).json(error);
  }
};

//update relevant event details
const updateEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json("There is no event to update");
    }

    const { postedTime, description, owner, title, imageUrl } = req.body;

    const updatedEvent = await Event.findByIdAndUpdate(eventId, {
      postedTime,
      description,
      owner,
      title,
      imageUrl,
    });

    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//remove unnesessary events
const removeEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json("There is no event to remove");
    }

    const removedEvent = await Event.findByIdAndDelete(eventId);
    res.status(200).json(removedEvent);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addEvent,
  getEvents,
  getEvent,
  updateEvent,
  removeEvent,
};
