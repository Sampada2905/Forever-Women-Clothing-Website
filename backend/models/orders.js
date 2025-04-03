var mongoose=require("mongoose")
var orderSchema=new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    order_data: {
        type: Array,
        required: true,
    },
    totalprice:{
        type:Number,
        required:true,

    },
    date: {
        type:Date,
        required: true,
    }

})
var orders=mongoose.model("Order",orderSchema)
module.exports = orders