var cn=require("./db")
var users=require("./models/users")
var admins=require("./models/admin")
var contacts=require("./models/contact")
var express=require("express")
var parser=require("body-parser")
var cors=require("cors")
var app=express()
var ue=parser.urlencoded({extended:false})
app.use(parser.json())
app.use(cors({credentials:true}))
app.post("/createuser",ue,(req,res)=>{
    var rec={name:req.body.name,city:req.body.city,contact:req.body.contact,email:req.body.email,password:req.body.password}
    users.create(rec).then(()=>{
        res.json({"message":"Registration Successful"})
    }).catch(()=>{
        res.json({"message":"Problem Occured"})
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
app.listen(6060,()=>{
    console.log("server started 6060")
})