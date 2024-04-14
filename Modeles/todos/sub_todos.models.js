import mongoose from 'mongoose'




const subtodos_schema = new  mongoose.Schema({

    content :
    {
        type : String,
        required : true 
    },
    complete :{
        type : Boolean ,
        default : false 
    },
    createdby :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }

},{timestamps : true})

export const Sub_todos = mongoose.model("subToDo", subtodos_schema)