require("../database/connect")
const express= require("express")
const app = express()
//34an el-API be2bal w yraga3 json
app.use(express.json())
//34an lma el-data ttb3t m el-form t4ta8l
app.use(express.urlencoded({extended:true}))
const userRoutes=require("../routes/post.routes")
app.use("/user",userRoutes)


module.exports = app