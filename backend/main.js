var cn=require("./db")
var users=require("./models/users")
var admins=require("./models/admin")
var contacts=require("./models/contact")
var products=require("./models/product")
var carts=require("./models/cart1")
var orders=require("./models/orders")
var shipaddress=require("./models/shipaddress")
var express=require("express")
var parser=require("body-parser")
var cors=require("cors")
var multer=require("multer")
var fs=require("fs")
const upload=multer({dest:'tmp'})
var app=express()
var ue=parser.urlencoded({extended:false})
app.use(parser.json())
app.use(express.static('public'));
app.use(parser.urlencoded({extended:true}))
app.use(cors({credentials:true}))

app.post("/createuser",ue,(req,res)=>{
    var rec={name:req.body.name,city:req.body.city,contact:req.body.contact,email:req.body.email,password:req.body.password}
    users.create(rec).then(()=>{
        res.json({"message":"Registration Successful"})
    }).catch(()=>{
        res.json({"message":"Problem Occured"})
    })
})
app.post("/addcartitems",(req,res)=>{
     var rec={pid:req.body.pid,productsize:req.body.productsize,email:req.body.email,productquantity:req.body.productquantity}
     carts.create(rec).then(()=>{
        res.json({"message":"Item added to cart"})
     }).catch(()=>{
        res.json({"message":"problem occured"})
     })
})
app.get("/userlogin/:em/:ps",(req,res)=>{
    let em=req.params.em
    var ps=req.params.ps
    users.find({email:em,password:ps}).then((docs)=>{
        res.json(docs)
    })
})
app.get("/adminlogin/:em/:ps",(req,res)=>{
    let em=req.params.em
    var ps=req.params.ps
    admins.find({email:em,password:ps}).then((docs)=>{
        res.json(docs)
    })
})
app.post("/createcontact",ue,(req,res)=>{
    var rec={name:req.body.name,email:req.body.email,contact:req.body.contact,message:req.body.message}
    contacts.create(rec).then(()=>{
        res.json({"message":"Message Send Successfully"})
    }).catch(()=>{
        res.json({"message":"Problem Occured"})
    })
})

app.post("/orderdata",ue,(req,res)=>{
    var rec={email:req.body.email,order_data:req.body.order_data,totalprice:req.body.totalprice,date:req.body.date}
    orders.create(rec).then(()=>{
        res.json({"message":"order saved Successfully"})
    }).catch(()=>{
        res.json({"message":"Problem Occured"})
    })
   
})

app.get("/orderconfirmation/:em/:total",(req,res)=>{
    orders.find({email:req.params.em,totalprice:req.params.total}).then((docs)=>{
        res.json(docs)
    })
    
})
app.get("/getorderhistory/:em",(req,res)=>{
    orders.find({email:req.params.em}).then((docs)=>{
        res.json(docs)
    })
})

app.get("/vieworders",(req,res)=>{
    orders.find({}).then((docs)=>{
        res.json(docs)
    })
})

app.put("/orderstatus/:oi", ue, (req, res) => {
    var rec = {
        _id: req.params.oi
    }
    orders.updateOne(rec, { status: req.body.status }).then(() => {
        res.json({ "message": "Status updated" })
    })
})

app.post("/shippingaddress",ue,(req,res)=>{
    var rec={email:req.body.email,name:req.body.name,mobile:req.body.mobile,address:req.body.address,address2:req.body.address2,country:req.body.country,city:req.body.city,state:req.body.state,zip:req.body.zip}
    shipaddress.create(rec).then(()=>{
        res.json({"message":"Shipping address saved successfully"})
    }).catch(()=>{
        res.json({"message":"Problem Occured"})
    })
})


app.post('/productupload',upload.single('file'),function(req,res){
    if(req.file){
        fs.readFile(req.file.path,function(err,data){
            fs.writeFile(__dirname + "/public/" +req.file.originalname,data,function(err){
                if(err)
                    res.json({"message":"file not uploaded"})
                else{
                    var rec={productname:req.body.productname,productdescription:req.body.productdescription,productprice:req.body.productprice,productimage:req.file.originalname,productcategory:req.body.productcategory,productsubcategory:req.body.productsubcategory,productsizes:req.body.productsizes,bestseller:req.body.bestseller}
                    products.create(rec).then((docs)=>{
                        res.json({"message":"Product Uploaded"})
                    })
                }
            })
        })
    }
})

app.get("/getproducts/:cat",(req,res)=>{
   products.find({productcategory:req.params.cat}).then((docs)=>{
        res.json(docs)
    })
})
app.get("/getproducts/:cat/:subcat",(req,res)=>{
    products.find({productcategory:req.params.cat,productsubcategory:req.params.subcat}).then((docs)=>{
        res.json(docs)
    })
})


app.get("/sortproductsasc/:cat",(req,res)=>{
    products.find({$and:[{productcategory:req.params.cat},{"productprice":{$lte:1000}}]}).then((docs)=>{
        res.json(docs)
    })
})
app.get("/sortproductsdesc/:cat",(req,res)=>{
    products.find({productcategory:req.params.cat}).sort({productprice:-1}).then((docs)=>{
        res.json(docs)
    })
})


app.get("/getbestsellers",(req,res)=>{
    products.find({"bestseller":"yes"}).then((docs)=>{
        res.json(docs)
    })
})
app.get("/listproducts",(req,res)=>{
    products.find({}).then((docs)=>{
        res.json(docs)
    })
})

app.get("/getshipaddress/:em",(req,res)=>{
    shipaddress.find({email:req.params.em}).then((docs)=>{
        res.json(docs)
    })
})
app.get("/searchproducts",(req,res)=>{
    products.find({}).then((docs)=>{
        res.json(docs)
    })
})
app.get("/getproduct/:id",(req,res)=>{
    products.find({_id:req.params.id}).then((docs)=>{
        res.json(docs)
       
    })
})
app.get("/getcountcartitems/:em",(req,res)=>{
    carts.countDocuments({email:req.params.em}).then((docs)=>{
        res.json(docs)
    })
    
})
var cartproducts=[]
app.get("/getcartitems/:em",(req,res)=>{  
    carts.find({email:req.params.em}).then((records)=>{
        records.map(row=>{
            products.findOne({_id: row.pid}).then((rec)=>{
                cartproducts.push({productimage:rec.productimage,pid:row.pid,
                  productname:rec.productname,productprice:rec.productprice,
                  productquantity:row.productquantity,email:row.email,productsize:row.productsize 
                })
            })
        })
        res.json(cartproducts)
        cartproducts =[]
    })
    
})

app.get("/getrelatedproducts/:prosubcat/:procat",(req,res)=>{  
    products.find({productsubcategory:req.params.prosubcat,productcategory:req.params.procat}).limit(4).then((docs)=>{
        res.json(docs)
    })
    
})

app.delete("/delproduct/:id",(req,res)=>{
    products.deleteOne({_id:req.params.id}).then(()=>{
        res.json({'message':"product deleted successfully"})
    })
})
app.delete("/delcartitems/:id",(req,res)=>{
    carts.deleteOne({pid:req.params.id}).then(()=>{
        res.json({'message':"Cart item deleted successfully"})
    })
})

app.delete("/delcart/:em",(req,res)=>{
    carts.deleteMany({email:req.params.em}).then(()=>{
        res.json({'message':"Cart item deleted successfully"})
    })
})


app.listen(6060,()=>{
    console.log("server started 6060")
})