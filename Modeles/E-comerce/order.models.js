import mongoose from "mongoose";

const orderedItemSchema = new mongoose.Schema({
    productid : {
        
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Product'
        
    },
    quantity : {
        type : Number,
        required : true
    }
})


const order_schema = new mongoose.Schema({
    orderPrice :
    {
        type : Number,
        required : true 
    },
    customer : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    orderItems : {
        type : [orderedItemSchema]
    },
    address : {
        type : String,
        required : true
    },
    status : {
        type: String,
        enum : ["PENDING","CANCELLED","DELIVERED"],
        default : "PENDING"
    }
    
},{timestamps:true})

export  const Order = mongoose.model("Order", order_schema)