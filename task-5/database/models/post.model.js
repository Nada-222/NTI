
const mongoose = require("mongoose")
const validator = require("validator")
const Post = mongoose.model("User",{
    name:{
        type:String,
        required: true,
        trim:true
    }, 
    age:{
        type:Number,
        min:21,
        max:60
    }, 
    gender:{
        type:String,
        required: true,
        trim:true,
        enum:["male", "female"]
    }, 
    email:{
        type:String,
        required: true,
        trim:true,
        unique:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email")
        }
    }})
    module.exports=Post