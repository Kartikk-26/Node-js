const mongoose = require('mongoose')


//document define ( schema )
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    age : {
        required : true
    }
})


//mongoose => collection => model
//name,email,age
//queries always run on model 


const User = mongoose.model('user',userSchema);

module.exports = User;