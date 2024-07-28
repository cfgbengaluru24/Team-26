import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { AdminModel } from "../models/adminmodel.js";
import { TrainerModel } from "../models/trainerModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("route");
});

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  var user = await AdminModel.findOne({ username });
  let role = "admin";
  if (!user) {
    // Check if user is a trainer
    user = await TrainerModel.findOne({ username: username });
    console.log(user);
    role = "trainer";
  }

  if (!user) {
    return res.status(404).json({ message: "User Doesnt Exist!" });
  }

  //   const hashedpassword = await bcrypt.hash(password, 10);

  //   const isPasswordValid = await bcrypt.compare(password, user.password);
  const isPasswordValid = user.password === password;
  if (!isPasswordValid) {
    return res.status(404).json({ message: "Incorrect password!" });
  }

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userId: user._id, role });
});

export { router as authRouter };
