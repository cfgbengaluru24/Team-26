import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { createTrainer } from "./routes/trainerController.js";
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGOPASSWORD).then(() => {
  console.log("conneted");
});

app.use(cors());
app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/', Router);

const PORT = 5000;

app.get('/',(req,res)=>{
  console.log("connected to front page");
  res.send("front end page of login and signup of .........");
})

app.post('/createtrainer',createTrainer);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
