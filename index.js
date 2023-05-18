const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const Mongostore=require('connect-mongo')(session);//permanently stores the users data 
const flash=require('connect-flash');//requiring the connect flash module 

const customMware=require('./config/middleware');//requiring the middleware 


//const sassMidlleware=require('node-sass-middleware');//node sass is a middleware which converts the sass to css 

//sass acts like a middle ware converts css to scss
/*
app.use(sassMidlleware({
    src:'./assets/scss',//from where are we picking up the scss file to be converted
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'
}));
*/
app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



//mongo store is used to store the session cookie in the db 
app.use(session({
    name: '',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store:new Mongostore({
        mongooseConnection:db,
        autoRemove:'disabled'
    },
    function(err)
    {
        console.log(err||'connect-mongodb setup ok ');
    }
    )
}));

app.use(passport.initialize());//initialising the passport module 
app.use(passport.session());

app.use(passport.setAuthenticatedUser);//setting the authenticated user 


app.use(flash());


//to make use of the middleware 
app.use(customMware.setFlash);


// use express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
