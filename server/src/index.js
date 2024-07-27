import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from 'cors';
import { createEvents,getAllEvents } from "./routes/eventcontroller.js";
dotenv.config();
const app = express();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

mongoose.connect(process.env.MONGOPASSWORD).then(() => {
  console.log("conneteddd");
});

app.use(cors());
app.use(bodyParser.json({extended:true}));

app.use(bodyParser.urlencoded({extended:true}));
// app.use('/', Router);

app.get('/',(req,res)=>{
  console.log("admin page and the trainer logoin page");
  res.send("admin apeg and login pageeee")
})

app.post('/createevent',createEvents);
app.get('/getevents',getAllEvents);

const PORT = 5000;

app.listen(PORT,()=>{
  console.log(`app listening on port ${PORT}`);
})
