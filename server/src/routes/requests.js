import express from 'express';
import {TravelRequestModel} from '../models/TravelRequestSchema.js';
import calculateTotalTravelTime from './calculateTime.js';
import EventModel from '../models/eventmodel.js';
import moment from 'moment';
import mongoose from 'mongoose';
const router = express.Router();
import { Types } from 'mongoose';
import {ObjectId } from 'bson';

// Route to get all travel requests with status 'Pending'
router.get('/', async (req, res) => {
    try {
      // Find all travel requests with status 'Pending'
      const pendingRequests = await TravelRequestModel.find({ status: 'Pending' }).populate('TrainerId').populate('eventId');
      
      // Send the pending requests to the client
      res.json(pendingRequests);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  router.post('/approve', async (req, res) => {
    const { trainerId, eventId } = req.body;
  
    try {
      // Fetch the travel request
      console.log(trainerId, eventId)
      // const travelRequest = await TravelRequestModel.findOne({
      //   TrainerId: new mongoose.Types.ObjectId(trainerId),
      //   eventId: new mongoose.Types.ObjectId(eventId)
      // });

      const travelRequest = await TravelRequestModel.find();
      console.log(travelRequest)
      if (!travelRequest) {
        return res.status(404).json({ message: 'Travel request not found' });
      }
      console.log("helo")
      // Calculate total travel time and final arrival time

      const { totalTravelDuration, finalArrivalTime } = calculateTotalTravelTime(travelRequest.bookings);
  
      // Fetch the event details
      const event = await EventModel.findById(eventId);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      // Check if final arrival time is before 17:00 on the day before the event
      const eventStartTime = moment(event.date);
      const previousDay17h = eventStartTime.clone().subtract(1, 'days').set({ hour: 17, minute: 0, second: 0 });
  
      if (moment(finalArrivalTime).isBefore(previousDay17h)) {
        travelRequest.status = 'Approved';
      } else {
        travelRequest.status = 'Pending';
      }
  
      await travelRequest.save();
  
      res.json(travelRequest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

// Route to accept a travel request
router.post('/accept/:requestId', async (req, res) => {
  const { requestId } = req.params;

  try {
    // Find the travel request by ID and update its status to "Approved"
    const travelRequest = await TravelRequestModel.findById(requestId);
    if (!travelRequest) {
      return res.status(404).json({ message: 'Travel request not found' });
    }

    travelRequest.status = 'Approved';
    await travelRequest.save();

    res.json({ message: 'Travel request approved', travelRequest });
  } catch (error) {
    console.error('Error approving travel request:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to reject a travel request
router.post('/reject/:requestId', async (req, res) => {
  const { requestId } = req.params;

  try {
    // Find the travel request by ID and update its status to "Rejected"
    const travelRequest = await TravelRequestModel.findById(requestId);
    if (!travelRequest) {
      return res.status(404).json({ message: 'Travel request not found' });
    }

    travelRequest.status = 'Rejected';
    await travelRequest.save();

    res.json({ message: 'Travel request rejected', travelRequest });
  } catch (error) {
    console.error('Error rejecting travel request:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export { router as travelRequestsRouter };
