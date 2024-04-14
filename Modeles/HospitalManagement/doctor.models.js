import mongoose from "mongoose";

const doctor_schema = new mongoose.Schema({},{timestamps:true})

export const Doctor = mongoose.model("Doctor" , doctor_schema)