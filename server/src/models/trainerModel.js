import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TrainerSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  location: { type: String, required: true },
  languagesKnown: [{ type: String }],
  upcomingEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  completedEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  Assigned: { type: Boolean },
  Experience: { type: Number },
});

const Trainer = mongoose.model("Trainer", TrainerSchema);

export default Trainer;
