// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{type:String,required:true},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

export const AdminModel = mongoose.model('User', UserSchema);
