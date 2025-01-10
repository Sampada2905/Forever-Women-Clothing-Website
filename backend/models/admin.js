var mongoose=require("mongoose")
var as=new mongoose.Schema({
    email:String,
    password:String
})
var admins=mongoose.model("Admin",as)
module.exports = admins