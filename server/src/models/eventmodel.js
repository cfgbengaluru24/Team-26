import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EventSchema = new Schema({
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

const Event = mongoose.model("Event", EventSchema);
export default Event;
// module.exports = Event;
