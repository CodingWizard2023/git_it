const express=require('express');//require the express module 
const router=express.Router();//create a router 

//only the people who have signed in can post something otherwise they cannot 
//to ensure this we use passport to authenticate the user 
const passport=require('passport');//require the passport module 



const postsController=require('../controllers/posts_controller');

router.post('/create',passport.checkAuthentication,postsController.create);
router.get('/destroy/:id',passport.checkAuthentication,postsController.destroy);
//in both of these functions we are checking if the user is authenticated or not then we are calling the controllers function 


module.exports=router;

