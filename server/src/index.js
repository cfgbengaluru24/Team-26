import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import Trainer from "./models/trainerModel.js";
import Event from "./models/eventmodel.js";
import { authRouter } from "./routes/auth.js";
import { eventRouter } from "./routes/event.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGOPASSWORD).then(() => {
  console.log("conneted");
});
app.use("/login", authRouter);
app.use("/event", eventRouter);
// app.use('/', Router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // Helper method to find the correct position to insert the event
  _findInsertIndex(event) {
    let low = 0,
      high = this.queue.length;

    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (this.queue[mid].experienceLevel <= event.experienceLevel) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }

  // Enqueue an event into the priority queue
  enqueue(event) {
    const index = this._findInsertIndex(event);
    this.queue.splice(index, 0, event);
  }

  // Dequeue an event from the priority queue
  dequeue() {
    return this.queue.shift();
  }

  // Check if the priority queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // Get the size of the priority queue
  size() {
    return this.queue.length;
  }
}

async function assignTrainersToEvents(date) {
  try {
    const events = await Event.find({ date });

    // Create a priority queue and enqueue all events
    const pq = new PriorityQueue();
    events.forEach((event) => pq.enqueue(event));

    while (!pq.isEmpty()) {
      const event = pq.dequeue();
      let signups = event.SignUps;
      // console.log(signups);
      let assignedCount = event.assignedTrainers.length;

      while (signups.length > 0 && assignedCount < event.numberOfTrainers) {
        const availableSignups = signups.filter(async (signup) => {
          console.log(signup);
          const trainer = await Trainer.findOne({ name: signup.name });
          console.log(trainer);
          if (trainer) return !trainer.Assigned;
          return false;
        });

        if (availableSignups.length === 0) break;

        availableSignups.sort((a, b) => b.experience - a.experience);
        const selectedSignup = availableSignups[0];

        event.experienceLevel += selectedSignup.experience;
        event.assignedTrainers.push({ name: selectedSignup.name });
        signups = signups.filter(
          (signup) => signup.name !== selectedSignup.name
        );

        await Trainer.findOneAndUpdate(
          { name: selectedSignup.name },
          { Assigned: true }
        );

        assignedCount++;
      }

      event.SignUps = signups;
      await event.save();

      // Reinsert the event back into the priority queue if it's not fully assigned
      if (assignedCount < event.numberOfTrainers) {
        pq.enqueue(event);
      }
    }
  } catch (error) {
    console.error("Error assigning trainers to events:", error);
  }
}
const d = new Date(2024, 6, 28);
// assignTrainersToEvents(d);
