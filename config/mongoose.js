const mongoose=require('mongoose');//requiring the mongoose connectoin 

mongoose.connect('mongodb://localhost/codeial_development')//connecting mongoose to the mongodb

const db=mongoose.connection;//db is the variable that defines the connection between mongodb and mongoose

db.on('error',console.error.bind(console,"Error connecting to the MongoDB"));//if there is an error 


db.once('open',function()//once it gets connected to the database 
{
    console.log('Connected to the Database :: MongoDB')
});


module.exports=db;//exporting the database 





