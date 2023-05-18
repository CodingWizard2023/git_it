const express = require('express');//requiring the express module 
const router = express.Router();//we are using express router 
const passport = require('passport');//requiring passport strategy

const commentsController = require('../controllers/comments_controller');//requiing the comments controller 

router.post('/create', passport.checkAuthentication, commentsController.create);
router.get('/destroy/:id', passport.checkAuthentication, commentsController.destroy);


module.exports = router;