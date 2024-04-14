import mongoose from 'mongoose';

const pationts_schema = new mongoose.Schema({},{timestamps:true})

export const Pationts = mongoose.model("Pationts", pationts_schema)