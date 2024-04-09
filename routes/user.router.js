const{Router}=require("express")
const UserModel = require("../models/User.Schma")
const IsAuth = require("../middleware/IsAuth")
const Route=Router()

Route.get("/",(req,res)=>{
    res.render("index")
})
Route.get("/alldata",IsAuth,async(req,res)=>{
    let data=await UserModel.find()
    res.json(data)
})
Route.put("/update/:id",IsAuth,async(req,res)=>{
    let{id}=req.params
    let data=await UserModel.findByIdAndUpdate(id,req.body)
    res.json("Update sucessfully")
})
Route.get("/search",IsAuth,async(req,res)=>{
    let{search}=req.query
    let data=await UserModel.find({$or:[{name:search},{email:search},{phone:search}]})
    res.json(data)
})
Route.delete("/delete/:id",IsAuth,async(req,res)=>{
    let{id}=req.body
    let data=await UserModel.findByIdAndDelete(id)
    data.save()
    res.json(data)
})

module.exports=Route