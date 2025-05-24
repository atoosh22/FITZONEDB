const mongoose = require("mongoose");
const Joi = require('joi');
//schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter Full Name"]
    },
    phone: {
        type: String, 
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
        required: [true, "Enter User Name"],
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
    },
});

// Validation function
function userValidation(user) {
    const userValidate = Joi.object({
        name: Joi.string()
            .pattern(/^[A-Za-z\s]+$/)
            .required()
            .messages({
                "any.required": "Please fill in this field",
                "string.pattern.base": "Name must contain only letters and spaces"
            }),
        phone: Joi.string().pattern(/^\+252[0-9]{9}$/).required().messages({
            "any.required": "Phone number is required",
            "string.pattern.base": "Phone number must be in the format +252XXXXXXXXX"
        }),
        email: Joi.string().email().required().messages({"any.required": "Enter Email"}),
        password: Joi.string().required().messages({"any.required": "Enter Password"}),
        username: Joi.string().required().messages({"any.required": "Enter User Name"}),
        gender: Joi.string().valid('Male', 'Female').required().messages({"any.required": "Gender is required"}),
    });
    return userValidate.validate(user);
}

const User = mongoose.model('User', userSchema); 
exports.User = User;
exports.userValidation = userValidation;