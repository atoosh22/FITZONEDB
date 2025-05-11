const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    roomName: {
        type: Number,
        required: [true, "Enter Room Number"]
    },
    floor: {
        type: String,
        required: [true, "Enter Floor name"]
    },
    status: {
        type: String,
        required: [true, "Enter Status"]
    },
    building: {
        type: String,
        required: [true, "Enter Building Name"],
       
    }

});

const hotel = mongoose.model('hotelbooking', hotelSchema); 
module.exports = hotel;