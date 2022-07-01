const multer  = require('multer')
const upload = multer({ dest: 'images/' })

const userModel = require ("../database/models/user.model")
const sendEmailMe = require("../helper/sendEmail.helper")

//add user
class User{
//     //add user 
    static register = async(req,res)=>{
        try{
            const user = new userModel(req.body)
            user.usertype="user"
            await user.save()
            sendEmailMe(user.email,"hello")
            res.status(200).send({
                apiStatus: true,
                data:user,
                message:"user added successfuly"
            })

        }
        catch(e){
            res.status(500).send({
                apiStatuse:false,
                data:e.message,
                message:"error in register"
            })

        }
    }

    static addAdmin = async(req,res)=>{
        try{
            const user = new userModel(req.body)
            user.userType="admin"
            await user.save()
            res.status(200).send({
                apiStatus: true,
                data:user,
                message:"user added successfuly"
            })
        }
        catch(e){   
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error in register"
            })
        }
    }

//login user
static login =async (req,res)=>{
    try{
        const user = await userModel.loginUser(req.body.email, req.body.password)
            const token = await user.generateToken()
            res.status(200).send({
                apiStatus:true,
                data:{user, token},
                message:"logged in succesfuly"
            })
    }
    catch(e){
        res.status(500).send({apiStatus:false, error:e, message:e.message})
    }
}

//show all products

static getAllProducts = async(req, res) => {
    try{
        const allProducts = await userModel.find()
        res.status(200).send({
            apiStatus:true,
            data:allProducts,
            message:"data fetched"
        })
    }
    catch(e){
        res.status(500).send({apiStatus:false, error: e, message:e.message})
    }
}


//show single product
static getSingleProduct = async(req, res) => {
    try{
        const ProductData = await userModel.findById(req.params.id)
        if(!ProductData){
            res.status(404).send({
                apiStatus:false,
                data:null,
                message:"invalid user id"
            })
        }
        res.status(200).send({
            apiStatus:true,
            data:ProductData,
            message:"data fetched"
        })
    }
    catch(e){
        res.status(500).send({apiStatus:false, error: e, message:e.message})
    }
}

 //update status (activate)
 static activateUser = async(req,res) =>{
    try{
        // await userModel.findByIdAndUpdate(req.params.id, {status:true})
        const userData = await userModel.findById(req.params.id)
        userData.status = true
        await userData.save()
        res.status(200).send({
            apiStatus:true,
            data:userData,
            message:"data fetched"
        })
    }
    catch(e){
        res.status(500).send({apiStatus:false, error: e, message:e.message})
    }
}
//update product status (deactivate)
static deactivateUser = async(req,res) =>{
    try{
        
        const userData = await userModel.findById(req.params.id)
        userData.status = false
        await userData.save()
        res.status(200).send({
            apiStatus:true,
            data:userData,
            message:"data fetched"
        })
    }
    catch(e){
        res.status(500).send({apiStatus:false, error: e, message:e.message})
    }
}
//change status
static changeStatus = async(req,res) =>{
    try{
        
        req.user.status = !req.user.status
        await req.user.save()
        res.status(200).send({
            apiStatus:true,
            data:req.user,
            message:"data fetched"
        })
    }
    catch(e){
        res.status(500).send({apiStatus:false, error: e, message:e.message})
    }
    
}
 //update password
 static changePassword = async(req,res) =>{
    try{
        // const userData = await userModel.findById(req.params.id)
        const userData= req.user
        userData.password = req.body.password
        await userData.save()
        res.status(200).send({
            apiStatus:true,
            data:userData,
            message:"data fetched"
        })
    }
    catch(e){
        res.status(500).send({apiStatus:false, error: e, message:e.message})
    }
}

 //update user
 static updateUser= async(req,res)=>{
    try{
        const userData = await userModel.findByIdAndUpdate(
            req.user._id,
            req.body,
            {runValidators:true}
            )
        
        res.status(200).send({
            apiStatus:true,
            data:userData,
            message:"data fetched"
        })
    }
    catch(e){
        res.status(500).send({apiStatus:false, error: e, message:e.message})
    }
}

 //delete account
 static deleteUser= async(req,res)=>{
    try{
        const userData = await userModel.findByIdAndDelete(req.user._id)
        res.status(200).send({
            apiStatus:true,
            data:userData,
            message:"data fetched"
        })
    }
    catch(e){
        res.status(500).send({apiStatus:false, error: e, message:e.message})
    }
}
//logout
static logout = async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter(t=> t.token != req.token)
        await req.user.save()
        res.status(200).send({
            apiStatus:true,
            message:"logged out"
        })

    }
    catch(e){
        res.status(500).send({apiStatus:false, error: e, message:e.message})
    }
}

//logout all
static logoutAll = async(req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.status(200).send({
            apiStatus:true,
            message:"logged out"
        })
    }
    catch(e){
        res.status(500).send({apiStatus:false, error: e, message:e.message})
    }        
}

//uploadImage
static uploadImage=  async(req, res)=>{
    try{
        const ext = path.extname(req.file.originalname)
        const newName = "images/"+req.file.fieldname + Date.now()+ext
        fs.rename(req.file.path, newName, ()=>{})
        req.user.image = newName
        req.user.name= req.body.name
        req.user.age = req.body.age
        await req.user.save()
        res.send({data:req.user})
    }
    catch(e){
        res.send(e.message)
    }
  }
}
module.exports = User