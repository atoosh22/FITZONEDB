const User = require('../models/users.model');

// Create user
const createuser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json({ message: "New User Has Been Saved", data: savedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to retrieve this data" });
    }
};

// Get user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id); 
        if (!user) {
            return res.status(404).json({ message: "User Not Found" }); 
        }
        res.json({ status: true, data: user }); 
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Lama Helin Xogta User-ka" }); 
    }
};

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ status: true, data: users });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Unable to retrieve users data" });
    }
};

// Update user
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            status: true,
            message: "New information Has Been Updated",
            updatedUser: updatedUser
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Lama Update Garayn Xogtaan" });
    }
};

// Delete user
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.json({
            status: true,
            message: "New information Has Been Deleted",
            deletedUser: deletedUser
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Lama Delete Garayn Xogtaan" });
    }
};

module.exports = {
    createuser,
    updateUser,
    deleteUser,
    getUserById,
    getAllUsers
};