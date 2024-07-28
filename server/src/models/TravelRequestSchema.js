// models/TravelRequest.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  bookingId: { type: String, required: true },
  departureCity: { type: String, required: true },
  arrivalCity: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  seatClass: { type: String },
  duration: { type: String, required: true }
});

const TravelRequestSchema = new Schema({
  TrainerId: { type: Schema.Types.ObjectId, ref: 'trainer', required: true },
  eventId: { type: Schema.Types.ObjectId, ref: 'events', required: true },
  bookings: {
    flights: [BookingSchema],
    railways: [BookingSchema],
    buses: [BookingSchema]
  },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }
});

export const TravelRequestModel = mongoose.model('TravelRequest', TravelRequestSchema);
export default TravelRequestModel;