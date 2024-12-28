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
    const email = req.user.email; 
    // Check if the user exists
    const user = await User.findOne({email});
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create a new room and associate it with the user
    const lodge = new Lodge({
      name,
      description,
      location,
      available,
      user: email,  // Link the room to the user by ID
    });

    console.log(lodge);
    await lodge.save();

    res.status(201).json({
        lodge
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
