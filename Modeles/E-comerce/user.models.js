import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
username : 
{
    type : String,
    required : true,
    unique : true,
    lowercase : true
},
email : 
{
    type : String,
    required : true,
    unique : true,
    lowercase : true
},
password :
{
    type: String,
    required : true,
    unique : true
}


},{timestamps:true})

export const User = mongoose.model("User",user_schema)
