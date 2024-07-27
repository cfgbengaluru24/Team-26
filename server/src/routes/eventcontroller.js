import Event from "../models/eventmodel.js"
import express from "express";
import moment from "moment"


const router = express.Router();
router.get("/", (req, res)=>{
    res.send("route")
})
// export const createEvents = async (request,response) =>{
//     try{
//         const event = await new Event(request.body);
//         event.save();
//         console.log("event saved successfully");
    
//         return response.status(200).json({msg:"Event saved successfully"});
//         }catch(error)
//         {
//             return response.status(500).json({msg:error});
//         }
//     };


// export const getAllEvents = async (request, response) => {

//     let today = moment().startOf('day').toDate(); 
    
//     try {

//             const events = await Event.find({
//                 date: { $gt: today }
//             });
        
//             return response.status(200).json(events);
//         } catch (error) {
//             return response.status(500).json({ msg: error.message });
//         }
//     };


router.post("/createevents",async(req,res)=>{
    try{
        const event = await new Event(request.body);
        event.save();
        console.log("event saved successfully");
    
        return response.status(200).json({msg:"Event saved successfully"});
        }catch(error)
        {
            return response.status(500).json({msg:error});
        }
})

router.get("/getAllEvents",async(req,res)=>{
    let today = moment().startOf('day').toDate(); 
    
    try {

            const events = await Event.find({
                date: { $gt: today }
            });
        
            return response.status(200).json(events);
        } catch (error) {
            return response.status(500).json({ msg: error.message });
        }
})

export {router as eventRouter}