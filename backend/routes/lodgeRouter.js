const express = require("express");
const router = express.Router();

const User = require('../models/User');  // Import User model
const authenticateUser = require("../middlewares/authMiddlware");
const Lodge = require("../models/Lodge");

// Create a new lodge and associate it with a user
router.post('/lodge',authenticateUser, async (req, res) => {
  try {
    // Assuming req.body contains the room data, and req.user.id contains the user ID (from JWT or session)
    const { name, description,location,available} = req.body;
    const userId = req.user.id;  

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create a new room and associate it with the user
    const room = new Lodge({
      name,
      description,
      location,
      available,
      user: userId,  // Link the room to the user by ID
    });


    await room.save();


    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
