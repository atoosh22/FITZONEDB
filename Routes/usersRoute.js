const express = require('express');
const router = express.Router();
const {
    createuser,
    updateUser,
    deleteUser,
    getUserById
} = require('../controllers/users.controller');

// Endpoint to get total members count
router.get('/count', async (req, res) => {
    try {
        const count = await User.countDocuments();
        res.json({ total: count });
    } catch (err) {
        res.status(500).json({ message: 'Error getting members count' });
    }
});

// Register new user
router.post('/', createuser);
// Get member by ID
router.get('/:id', getUserById);
// Update user
router.put('/:id', updateUser);
// Delete user
router.delete('/:id', deleteUser);

module.exports = router;