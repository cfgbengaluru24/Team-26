import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: { type: String },
  location: { type: String },
  date: { type: Date },
  numberOfTrainers: { type: Number },
  experienceLevel: { type: Number },
  SignUps: [
    {
      name: "String",
      experience: Number,
    },
  ],
  assignedTrainers: [{ name: "String" }],
});

const EventModel = mongoose.model("Event", EventSchema);
export default EventModel;
// module.exports = Event;
