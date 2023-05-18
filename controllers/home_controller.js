const Post=require('../models/post');//get the model from the posts model 
const User=require('../models/user')//get the model from the user module 



module.exports.home=async function(req,res)//home is a function which is asynchronous which tells that asynchronous functions are being executed 
{
//we will return a response 
try{
//here we have to display the user who has posted so instead of the user id we have to populate the user of each post 
let posts=await Post.find({})   //all the successful responses will be stored in posts 
.populate('user')//we are populating the user to all the posts 
.populate({
    path:'comments',//because there are multiple comments 
    populate:{//further populate that who has written a comment 
        path:'user'
    }
});

   let users= await User.find({});//all the successfull responses will be stored in users variable 
    return res.render('home',{//rendering the web page ejs file 
        title:"Codeial|Home",
        posts:posts,//populated 
        all_users:users//populated  
    });
    }
    catch(err)//if there is an error then it is going to go to this function 
    {
        console.log('Error',err);
        return;
    }





}
//whatever posts that are created we are populating it with the user details 


//module.exports.actionName=function(req,res)


//using then 
//Post.find({}).populate('comments').then();


//let posts=Post.find({}).populate('comments').exec();




