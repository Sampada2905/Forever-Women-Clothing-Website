var mongoose=require("mongoose")
var shipaddressSchema=new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    mobile:{
        type:Number,
        required:true,

    },
    address: {
        type:String,
        required: true,
    },
    address2: {
        type:String,
        required: true,
    },
    country: {
        type:String,
        required: true,
    },
    city: {
        type:String,
        required: true,
    },
    state: {
        type:String,
        required: true,
    },
    zip: {
        type:String,
        required: true,
    }

})
var shipaddress=mongoose.model("Shipaddress",shipaddressSchema)
module.exports = shipaddress