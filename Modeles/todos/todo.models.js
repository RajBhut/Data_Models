import mongoose from "mongoose";
 const todo_schema = new  mongoose.Schema({

    content :{
        type : String,
        required : true ,

    },
    completed :{
        type : Boolean,
        default : false
    },
    createdBy : {
type : mongoose.Schema.Types.ObjectId,
ref : "User"
    },
    subTodos : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "subToDo"
        }
    ] // Array of subTodos

    

 },{timestamps:true})

 export const Todo = mongoose.model("Todo", todo_schema)