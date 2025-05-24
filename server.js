
require("dotenv").config()
const connDB=require("./config/db")
const cors=require("cors")
const express=require("express")
const app=express()
const router=require("./routes/userRoute")
connDB()

app.use(cors())
app.use(express.json())

app.use("/api/users",router)
app.get("/",(req,res)=>{
    res.send("api is running")
})
app.listen(8001,()=>{
    console.log("server is running")
})