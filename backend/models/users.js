var mongoose=require("mongoose")
var us=new mongoose.Schema({
    name:String,
    city:String,
    contact:String,
    email:String,
    password:String
})
var users=mongoose.model("User",us)
module.exports = users