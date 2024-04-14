import mongoose from "mongoose";

 const userSchema = new mongoose.Schema(
{
 // username : String (can be wrie like this if not need extra feture)
 username : {
    type : String,
    required : true,
    unique : true,
    lowercase : true
 },

email :{

    type : String ,
    required : true ,
    unique : true ,
    lowercase : true 
},
password : {
    type : String,
    required : [true , "password is required"]
}

} , 
{timestamps : true}
)




 export const User = mongoose.model("User",userSchema)
 // note : in mogodb User modified to "users",  right side of =  "User" is use in refrence
