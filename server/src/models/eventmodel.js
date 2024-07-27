import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  location: { type: String, required: true },
  date: { type: Date, required: true },
  numberOfTrainers: { type: Number, required: true },
  experienceLevel: { type: Integer },
  SignUps: [
    {
      name: "String",
      experience: Integer,
    },
  ],
});

export const EventModel = mongoose.model("Event", EventSchema);

