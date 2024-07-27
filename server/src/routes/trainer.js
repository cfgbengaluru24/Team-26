import express from "express";
import TrainerModel from "../models/trainerModel.js";


const router = express.Router();

// Route to handle the request
router.get("/filteredEvents/:trainerId", async (req, res) => {
  const { trainerId } = req.params;

  try {
    // Find the trainer by ID
    const trainer = await TrainerModel.findById(trainerId);
    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }

    // Return the result with trainer's data
    res.json({
      trainer: {
        name: trainer.name,
        email: trainer.email,
        location: trainer.location,
        //upcomingEvents: trainer.upcomingEvents,
      },
      filteredEvents: filteredEvents,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export { router as eventRouter };
