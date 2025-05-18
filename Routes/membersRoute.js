const Members = require('../models/members.model');
const route = require('express').Router();

const {
  createmember,
  updateMember,
  deleteMember
} = require('../controllers/members.controller');

// Endpoint to get total members count
route.get('/count', async (req, res) => {
    try {
        const count = await Members.countDocuments();
        res.json({ total: count });
    } catch (err) {
        res.status(500).json({ message: 'Error getting members count' });
    }
});

// Register new member
route.post('/', createmember);
// Update member
route.put('/:id', updateMember);
// Delete member
route.delete('/:id', deleteMember);

module.exports = route;



