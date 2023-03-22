const express=require('express');//fetch the existing instance 
const router=express.Router();
const homeController=require('../controllers/home_controller');

console.log('router loaded ');

router.get('/',homeController.home);//accessing the controller
router.get('/random',homeController.RandomAction);
module.exports=router;  


