const { User, userValidation } = require('../models/users.model');

// Create user
const createUser = async (req, res) => {
    const { error } = userValidation(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json({ message: "New User Has Been Saved", data: savedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to save user data" });
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
        res.status(500).json({ message: "Unable to retrieve user data" }); 
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
    const { error } = userValidation(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User Not Found" });
        }
        res.json({
            status: true,
            message: "User information has been updated",
            updatedUser: updatedUser
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Unable to update user data" });
    }
};

// Delete user
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User Not Found" });
        }
        res.json({
            status: true,
            message: "User has been deleted",
            deletedUser: deletedUser
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Unable to delete user data" });
    }
};

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    getAllUsers
};