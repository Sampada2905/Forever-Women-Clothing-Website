var mongoose=require("mongoose")
var proSchema=new mongoose.Schema({
    productname:String,
    productdescription:String,
    productprice:Number,
    productimage:String,
    productcategory:String,
    productsubcategory:String,
    productsizes:Array,
    bestseller:String
})
var products=mongoose.model("Product",proSchema)
module.exports = products