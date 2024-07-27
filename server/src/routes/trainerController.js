import Trainer from "../models/trainerModel.js";
import Event from "../models/eventmodel.js";
import { request } from "express";
export const createTrainer = async (request,response) =>{
    try{
        const event = await new Trainer(request.body);
        event.save();
        console.log("trainer info saved succesfully");
        return response.status(200).json({msg:"trainer event saved successfully"});
        }catch(error)
        {
            console.log(error);
            return response.status(500).json({msg:error});
        }
    };


export const updatedCompletedEvents = async(req,res) =>{
    try {
        
         // Retrieve all entries from the eventModel
         const eventsList = await eventModel.find();
         const trainerInformation = await trainerModel.find({ postId: request.params._id });
        // Step 2: Retrieve events using the IDs from upcomingEvents
        const upcomingEventIds = trainer.upcomingEvents; // Array of event IDs

        // Fetch events where the _id is in the upcomingEventIds array
        const events = await Event.find({ _id: { $in: upcomingEventIds } }).exec();

        // Get the current date
        const currentDate = new Date();

        // Step 3: Determine which events are completed (date < currentDate)
        const completedEvents = events.filter(event => event.date < currentDate);

        // Collect the IDs of completed events
        const completedEventIds = completedEvents.map(event => event._id);

        // Update Trainer document
        await Trainer.findByIdAndUpdate(
            req.params.id,
            {
                $pullAll: { upcomingEvents: completedEventIds },
                $addToSet: { completedEvents: { $each: completedEventIds } }
            },
            { new: true }
        ).exec();


        return response.status(200).json(events);
    } catch (error) {
        return response.status(500).json({ msg: error.message });
    }
}


// export const getComments = async (request, response) => {
//     try {
//         const comments = await Comment.find({ postId: request.params.id });
//         return response.status(200).json(comments);
//     } catch (error) {
//         return response.status(500).json({ error: error.message });
//     }
// };