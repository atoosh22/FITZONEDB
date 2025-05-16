const users = require('../models/users.model');
const route = require('express').Router();

// Insertion code
route.post('/', async (req, res) => {
    try {
        const newuser = new users({
            name: req.body.fullName,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            username: req.body.userName,
            gender: req.body.gender
           
        });

        const saveuser = await newuser.save();
        res.status(201).json({ message: "New user Has Been Saved", data: saveuser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Waxaa jira khalad" });
    }
});




// Update code
route.put('/:id', async (req, res) => {
    try {
        const updateUser = await users.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            status: true,
            message: "New information Has Been Updated",
            updateDate: updateUser
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Lama Update Garayn Xogtaan" });
    }
});


//Delele code

route.delete('/:id', async (req, res) => {
    try {
        const deleteUser = await users.findByIdAndDelete(
            req.params.id,
        
        );

        res.json({
            status: true,
            message: "New information Has Been Deleted",
            deleteDate: deleteUser
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Lama Delete Garayn Xogtaan" });
    }
});







module.exports = route;



  