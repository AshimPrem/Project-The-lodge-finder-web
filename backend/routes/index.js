const express = require('express')
const userRouter = require("./userRouter")
const roomRouter= require ("./roomRouter")
const router = express.Router();

router.use("/users",userRouter)
router.use("/rooms",roomRouter)
module.exports=router