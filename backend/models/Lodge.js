
const mongoose = require('mongoose')
// Define the schema for Room
const lodgeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',  // Reference to User model
    }
  });
  
  // Create the Room model
  const Lodge = mongoose.model('Lodge', lodgeSchema);
  
  // Export both models
  module.exports =  Lodge ;