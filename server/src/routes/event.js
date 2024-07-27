// import TrainerModel from "../model/trainerModel.js"; // Adjust the import path as necessary
// import EventModel from "../model/eventmodel.js"; // Adjust the import path as necessary
import express from "express";

import TrainerModel from "../models/trainerModel.js";
import EventModel from "../models/eventmodel.js";
const router = express.Router();
router.post("/apply", async (req, res) => {
  try {
    const { trainerId, eventId } = req.body;

    // Fetch the trainer's information
    const trainer = await TrainerModel.findById(trainerId);
    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }

    // Prepare the sign-up information
    const signUpInfo = {
      name: trainer.name,
      experience: trainer.Experience, // Assuming the 'Experience' field represents the trainer's experience level
    };

    // Add the trainer's name to the event's sign-ups
    await EventModel.updateOne(
      { _id: eventId },
      { $push: { SignUps: signUpInfo } }
    );

    // Respond with success message
    return res
      .status(200)
      .json({ message: "Trainer added to event sign-ups successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

// Route to handle the request
router.get("/filteredEvents/:trainerId", async (req, res) => {
  console.log("hello");
  const { trainerId } = req.params;

  try {
    // Find the trainer by ID
    const trainer = await TrainerModel.findById(trainerId).populate(
      "upcomingEvents"
    );
    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }

    //  Get IDs of upcoming events
    const upcomingEventIds = trainer.upcomingEvents.map((event) =>
      event._id.toString()
    );

    //  Find all events
    const allEvents = await EventModel.find();

    //  Filter events
    const filteredEvents = allEvents
      .map((event) => {
        const isSignedUp = event.SignUps.some(
          (signUp) => signUp.name === trainer.name
        );
        return {
          ...event.toObject(),
          isSignedUp: isSignedUp,
        };
      })
      .filter((event) => !upcomingEventIds.includes(event._id.toString()));

    //=Return the result
    res.json(filteredEvents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export { router as eventRouter };
