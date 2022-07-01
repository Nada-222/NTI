
const Post = require ("../controllers/admin.controller")
const {auth, adminAuth} = require ("../middlewere/auth.middlewere")
const router = require ("express").Router()


router.post("/add",adminAuth, Post.add)
router.get("/myPosts", auth, Post.myPosts)
module.exports= router