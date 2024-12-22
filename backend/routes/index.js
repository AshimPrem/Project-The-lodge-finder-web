const express = require('express')
const userRouter = require("./userRouter")
const lodgeRouter= require ("./lodgeRouter")
const router = express.Router();

router.use("/users",userRouter)
router.use("/lodges",lodgeRouter)
module.exports=router