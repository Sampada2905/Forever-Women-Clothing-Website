var mongoose=require("mongoose")
var cn=mongoose.connect("mongodb://localhost:27017/foreverclothingdb").then(()=>{
    console.log("connected")
}).catch(()=>{
    console.log("problem occured")
})
module.exports=cn 