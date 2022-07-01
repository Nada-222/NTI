require("../database/connect")
const  express = require("express")
const cors = require ("cors")
app.use(cors())

//const { appendFile } = require("fs")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const userRoutes = require("../routes/user.routes")
app.use("/user",userRoutes)
const adminRoutes = require("../routes/admin.routes")
app.use("/admin",adminRoutes)
module.exports= app