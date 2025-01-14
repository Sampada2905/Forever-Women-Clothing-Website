var mongoose=require("mongoose")
var cs=new mongoose.Schema({
    name:String,
    email:String,
    contact:String,
   message:String
})
var contacts=mongoose.model("Contact",cs)
module.exports = contacts