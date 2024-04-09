const{Router}=require("express")
const AdminModel = require("../models/Admin.schma")
const jwt = require("jsonwebtoken")
const ARoute=Router()

ARoute.post("/Register",async(req,res)=>{
    let{email}=req.body
    let data=await AdminModel.findOne({email:email})
    if(data){
        res.json("Alredy Extis User !")
    }
    else{
        let user=await AdminModel.create(req.body)
        res.json("add sucessfully")
    }
})
ARoute.post("/login",async(req,res)=>{
    let{email}=req.body
    let data=await AdminModel.findOne({email:email})
    if(data){
        let token = jwt.sign({ username: data.username }, 'the');
        res.cookie("token",token).send("done")
        console.log(token);
    }
    else{
        res.json("Signup First !")
    }
})

module.exports=ARoute