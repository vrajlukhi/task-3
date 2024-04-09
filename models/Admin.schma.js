const mongoose=require("mongoose")
const AdminSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    confirm_password:String,
    status :Boolean,
    created_date:String,
    updated_date:String,
})
const AdminModel=mongoose.model("Admin",AdminSchema)
module.exports=AdminModel