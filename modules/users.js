const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name :{
        type : String
    },
    emailId: {
        tpye : String
    },

    phone : {
        type : Number
    }
});


const Users = mongoose.model("Users", userSchema);

module.exports = Users;