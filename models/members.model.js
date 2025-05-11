const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
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
        type: Date,  // Change this line
        
    },
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    paid: {
        type: String,
        required: true,
        enum: ['One Month', 'Two Months', 'Three Months'] 
    }
});

const Member = mongoose.model('Member', memberSchema); 
module.exports = Member;