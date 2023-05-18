const mongoose=require('mongoose');
//importing the mongoose library
const commentSchema=new mongoose.Schema({//creating a comment schema 
    content:{
        type:String,
        required:true
    },
    // comment belongs to a user 
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

    post:{
        type:mongoose.Schema.Types.ObjectId,    
        ref:'Post'
    },
},
    {
        timestamps:true//when that particular comment was created 
    }
);


const Comment =mongoose.model('Comment',commentSchema);//exports it as Comment 
module.exports=Comment;

