const Members = require('../models/users.model');


// Insertion code
const createuser= async (req, res) => {
    try {
        const newUser = new users({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            gender: req.body.gender
           
        });

        const saveUser = await newUser.save();
        res.status(201).json({ message: "New User Has Been Saved", data: saveUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Waxaa jira khalad" });
    }
};




// Update code
const updateUser= async (req, res) => {
    try {
        const updateUser = await users.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            status: true,
            message: "New information Has Been Updated",
            updateUser: updateUser
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Lama Update Garayn Xogtaan" });
    }
};


//Delele code

const deleteUser= async (req, res) => {
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
};

module.exports={
    createuser,
    updateUser,
    deleteUser

}




