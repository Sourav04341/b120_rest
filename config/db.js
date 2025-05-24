
require("dotenv").config()
const mongoose=require("mongoose")
const uri=process.env.MONGODB_URL

const connDB=async()=>{
    try{
        const conn=await mongoose.connect(uri)
        console.log(`${conn}:connection is created`)
    }catch(err){
        if(err)
            console.error(err)
    }
}
module.exports=connDB