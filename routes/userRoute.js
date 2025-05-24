
const express=require("express")
const {getUser,createUser,getUserById,updateUser,deleteUser}=require("../controllers/userController")

const router=express.Router()
router.get("/",getUser)
router.get("/",createUser)
router.get("/:id",getUserById)
router.get("/:id",updateUser)
router.get("/:id",deleteUser)

module.exports=router