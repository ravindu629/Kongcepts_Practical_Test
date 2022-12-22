const mongoose = require("mongoose");
const { Schema } = mongoose;

//Created Schema for Events
const eventSchema = new Schema({
  postedTime: String,
  description: String,
  owner: String,
  title: String,
  imageUrl: String,
});

module.exports = Event = mongoose.model("Event", eventSchema);
