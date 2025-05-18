const users = require('../models/users.model');
const route = require('express').Router();

const {
  createuser,
  updateUser,
  deleteUser
} = require('../controllers/users.controller');

// Endpoint to get total members count
route.get('/count', async (req, res) => {
    try {
        const count = await users.countDocuments();
        res.json({ total: count });
    } catch (err) {
        res.status(500).json({ message: 'Error getting members count' });
    }
});

// Register new user
route.post('/', createuser);
// Update user
route.put('/:id', updateUser);
// Delete user
route.delete('/:id', deleteUser);

module.exports = route;



