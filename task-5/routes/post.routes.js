const post = require("../controllers/post.controller")
const router = require("express").Router()
//add user
router.post("/register", post.register)

//get all users
router.get("/all", post.getAllUser)

//get single user
router.get("/all/:id", post.getSingleUser)
//update statuse (activate)
//update statuse (deactivate)
router.patch("/activste/:id", post.activateUser)//patch:to update
router.get("/deactivate/:id", post.deactivateUser)//
router.patch("/changeStatuse/:id", post.changeStatuse)

//update user
router.patch("/update/:id", user.updateUser)
//update password
router.patch("/updatePassword/:id", user.changePassword)
//remove account
router.delete("/delete/:id", user.deleteUser)

module.exports= router