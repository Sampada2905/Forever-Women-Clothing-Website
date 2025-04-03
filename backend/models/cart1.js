var mongoose=require("mongoose")
var cartSchema=new mongoose.Schema({
    pid:String,
    productsize:String,
    email:String,
    productquantity:Number
})
var carts=mongoose.model("Cart",cartSchema)
module.exports = carts