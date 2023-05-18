//this is the index of all the routes 
//any different kind of request will be guided to this route which requires all the other routes under this folder 
const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);
//if any request comes from the url by /users then we can connect this route to users.js
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));
router.use('/comments',require('./comments'));



//for any further routes access from here 
//router.use('/router_name_is',require('./router_file));
module.exports=router;

