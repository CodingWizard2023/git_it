//to put the messages into the response and render it we have to create a middleware 
module.exports.setFlash= function(req,res,next)
{
    res.locals.flash={//res.locals.flash is an object 
        'success':req.flash('success'),
        'error':req.flash('error')
    }

    next();

}