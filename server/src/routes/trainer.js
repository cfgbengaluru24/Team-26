import express from 'express';
import { TrainerModel } from '../models/trainerModel.js';

const router = express.Router();

// Route to get trainer details by ID
router.get('/:trainerId', async (req, res) => {
  const { trainerId } = req.params;

  try {
    const trainer = await TrainerModel.findById(trainerId).populate('upcomingEvents').populate('completedEvents');
    
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }

    res.json(trainer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export { router as trainerRouter };
