const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  location: { type: String, required: true },
  date: { type: Date, required: true },
  numberOfTrainees: { type: Number, required: true },
  experienceLevel: { type: Integer },
  SignUps: [
    {
      objectId: "volunteer1",
      experience: 5,
    },
    {
      objectId: "volunteer2",
      experience: 3,
    },
  ],
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
