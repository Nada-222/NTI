const user = require("../controllers/user.controller")
const router= require("express").Router()
const {auth,adminAuth} = require("../middlewere/auth.middlewere")

//add user
router.post("/register", user.register)
router.post("/addAdmin",adminAuth, user.addAdmin)
// 

//login user
router.post("/login", user.login)

// //get all products
router.get("/all",auth, user.getAllProducts)

//get single product
 router.get("/all/:id", auth, user. getSingleProduct)

 //update status (activate - deactivate)
router.patch("/activate/:id", user.activateUser)
router.put("/deactivate/:id", user.deactivateUser)
router.patch("/changeStatus", auth, user.changeStatus)


//update user
router.patch("/update", auth, user.updateUser)
//update password
router.patch("/updatePassword", auth, user.changePassword)
//delete account
router.delete("/delete", user.deleteUser)

// //uploade imeg
//router.patch('/profile',auth, upload.single('profile'),user.uploadImage)




module.exports= router