const express=  require("express")
const connect = require("./config/db")
const Route = require("./routes/user.router")
const cookie=require("cookie-parser")
const ARoute = require("./routes/Admin.router")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookie())
app.use(Route)
app.use(ARoute)

app.listen(8090,()=>{
    console.log("Server 8090");
    connect()
})