const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Enter Full Name"]
    },
    phone: {
        type: String,
        required: [true, "Enter Phone Number"]
    },
    address: {
        type: String,
        required: [true, "Enter Location"]
    },
    shift: {
        type: String,
        required: [true, "Enter Building Name"],
        enum: ['Morning', 'Afternoon', 'Evening']
    },
    date: {
        type: Date,  
        require:true,
        
    },
    gender: {
        type: String,
        require:true,
        enum: ['Male', 'Female']
    },
    paid: {
        type: String,
        required: true,
        enum: ['One Month', 'Two Months', 'Three Months'] 
    }
});

const user = mongoose.model('users', userSchema); 
module.exports = user;