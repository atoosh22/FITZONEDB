// Insertion code
const createmember= async (req, res) => {
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

        const saveMember = await newMember.save();
        res.status(201).json({ message: "New Member Has Been Saved", data: saveMember });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Waxaa jira khalad" });
    }
};




// Update code
const updateMember= async (req, res) => {
    try {
        const updateMember = await Members.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            status: true,
            message: "New information Has Been Updated",
            updateDate: updateMember
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Lama Update Garayn Xogtaan" });
    }
};


//Delele code

const deleteMember= async (req, res) => {
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
};

module.exports={
    createmember,
    updateMember,
    deleteMember

}




