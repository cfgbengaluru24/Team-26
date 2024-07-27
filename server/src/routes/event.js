import Trainer from ".model/trainerModel.js"; // Adjust the import path as necessary
import Event from ".model/eventmodel.js"; // Adjust the import path as necessary
import express from "express";

const router = express.Router();
router.post("/apply", async (req, res) => {
  try {
    const { trainerId, eventId } = req.body;

    // Fetch the trainer's information
    const trainer = await Trainer.findById(trainerId);
    if (!trainer) {
      return res.status(404).json({ message: "Trainer not found" });
    }

    // Prepare the sign-up information
    const signUpInfo = {
      name: trainer.name,
      experience: trainer.Experience, // Assuming the 'Experience' field represents the trainer's experience level
    };

    // Add the trainer's name to the event's sign-ups
    await Event.updateOne({ _id: eventId }, { $push: { SignUps: signUpInfo } });

    // Respond with success message
    return res
      .status(200)
      .json({ message: "Trainer added to event sign-ups successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

export { router as eventRouter };
