const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter Full Name"]
    },
    phone: {
        type: Number,
        required: [true, "Enter Phone Number"]
    },
    email: {
        type: String,
        required: [true, "Enter Email"]
    },
    password: {
        type: String,
        required: [true, "Enter Password"],
       
    },

    username: {
        type: String,
        required: [true, "Enter User name"],
       
    },

    gender: {
        type: String,
        required:true,
        enum: ['Male', 'Female']
    },
  
});

const user = mongoose.model('users', userSchema); 
module.exports = user;