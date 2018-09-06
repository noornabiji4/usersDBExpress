const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Database is connected");
    }
});

mongoose.Promise = Promise;


module.exports.Users = require('./users');
