const Members = require('../models/members.model');

// Insertion code
const createmember = async (req, res) => {
    try {
        const newMember = new Members({
            fullName: req.body.fullName,
            phone: req.body.phone,
            address: req.body.address,
            shift: req.body.shift,
            date: req.body.date,
            gender: req.body.gender,
            paid: req.body.paid
        });

        const savedMember = await newMember.save();
        res.status(201).json({ message: "New Member Has Been Saved", data: savedMember });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Waxaa jira khalad" });
    }
};

// Update code
const updateMember = async (req, res) => {
    try {
        const updatedMember = await Members.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMember) {
            return res.status(404).json({ message: "Member Not Found" });
        }
        res.json({ status: true, message: "New information Has Been Updated", updatedMember });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Lama Update Garayn Xogtaan" });
    }
};

// Delete code
const deleteMember = async (req, res) => {
    try {
        const deletedMember = await Members.findByIdAndDelete(req.params.id);
        if (!deletedMember) {
            return res.status(404).json({ message: "Member Not Found" });
        }
        res.json({ status: true, message: "New information Has Been Deleted", deletedMember });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Lama Delete Garayn Xogtaan" });
    }
};

// Get member by ID
const getMemberById = async (req, res) => {
    try {
        const member = await Members.findById(req.params.id);
        if (!member) {
            return res.status(404).json({ message: "Member Not Found" });
        }
        res.json({ status: true, data: member });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Lama Helin Xogta Xubnaha" });
    }
};

module.exports = {
    createmember,
    updateMember,
    deleteMember,
    getMemberById
};