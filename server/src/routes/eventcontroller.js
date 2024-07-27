import Event from "../models/eventmodel.js"

import moment from "moment"

export const createEvents = async (request,response) =>{
    try{
        const event = await new Event(request.body);
        event.save();
        console.log("event saved successfully");
    
        return response.status(200).json({msg:"Event saved successfully"});
        }catch(error)
        {
            return response.status(500).json({msg:error});
        }
    };


export const getAllEvents = async (request, response) => {

    let today = moment().startOf('day').toDate(); 
    
    try {

            const events = await Event.find({
                date: { $gt: today }
            });
            
            // Return the list of events with a 200 status code
            return response.status(200).json(events);
        } catch (error) {
            // Handle any errors with a 500 status code
            return response.status(500).json({ msg: error.message });
        }
    };