const mongoose=require('mongoose');

const multer=require('multer');//requiring multer 
const path=require('path');//requiring path 





const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,//this means that without filling the value of the name the user wont be created in the database
        
    }
},
{
    timestamps:true
});


const User = mongoose.model('User',userSchema);
module.exports=User;