import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    location: { type: String, required: true },
    date: { type: Date, required: true },
    numberOfTrainees: { type: Number, required: true }
});

const Event = mongoose.model('Event', EventSchema);

export default Event;
