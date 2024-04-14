import mongoose from 'mongoose'




const subtodos_schema = new  mongoose.Schema({

},{timestamps : true})

export const Sub_todos = mongoose.model("subToDo", subtodos_schema)