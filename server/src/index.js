import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGOPASSWORD).then(() => {
  console.log("cpnneted");
});
