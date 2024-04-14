import mongoose, { mongo } from "mongoose";

const product_schema = new mongoose.Schema({

discription : {
    required : true ,
    type : String ,

},
name :
{
    required : true,
    type : String
},
productImage :
{
 type : String   
},
price :
{
    type : Number ,
    default : 0
},
stock : {
    default : 0,
    type : Number
},
catagory :
{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Category',
    required : true
},
owner : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required : true
}


},{timestamps:true})

export const Product = mongoose.model("Product" , product_schema)