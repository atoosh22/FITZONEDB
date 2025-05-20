const express = require('express');
const router = express.Router();
const {
    createmember,
    updateMember,
    deleteMember,
    getMemberById
} = require('../controllers/members.controller');

// Endpoint to get total members count
router.get('/count', async (req, res) => {
    try {
        const count = await Members.countDocuments();
        res.json({ total: count });
    } catch (err) {
        res.status(500).json({ message: 'Error getting members count' });
    }
});

// Register new member
router.post('/', createmember);

// Get member by ID
router.get('/:id', getMemberById);

// Update member
router.put('/:id', updateMember);

// Delete member
router.delete('/:id', deleteMember);

module.exports = router;