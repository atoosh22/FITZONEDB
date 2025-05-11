const hotelbooking = require('../models/hotelbooking.model');
const route = require('express').Router();

// Insertion code
route.post('/', async (req, res) => {
    try {
        const newBooking = new hotelbooking({
            roomName: req.body.fullName,
            floorfloor: req.body.phone,
            status: req.body.address,
            building: req.body.shift,
        });

        const savebooking = await newBooking.save();
        res.status(201).json({ message: "New HotelBooking Has Been Saved", data: savebooking });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Waxaa jira khalad" });
    }
});




// Update code
route.put('/:id', async (req, res) => {
    try {
        const updateBooking = await Members.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            status: true,
            message: "New information Has Been Updated",
            updateDate: updateBooking
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Lama Update Garayn Xogtaan" });
    }
});


//Delele code

route.delete('/:id', async (req, res) => {
    try {
        const deleteMember = await Members.findByIdAndDelete(
            req.params.id,
        
        );

        res.json({
            status: true,
            message: "New information Has Been Deleted",
            deleteDate: deleteMember
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Lama Delete Garayn Xogtaan" });
    }
});







module.exports = route;



  