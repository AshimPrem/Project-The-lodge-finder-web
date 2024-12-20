
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));




  // zodSchemas/roomSchema.js
// const { z } = require('zod');

// Zod schema for room data
// const roomSchema = z.object({
//   name: z.string().min(1, 'Room name is required'),  // Ensure name is a non-empty string
//   capacity: z.number().int().positive('Capacity must be a positive number'),
//   location: z.string().min(1, 'Location is required'),  // Ensure location is a non-empty string
//   available: z.boolean().optional(),  // optional field, defaults to true if not provided
//   createdAt: z.date().optional(),  // optional as it will be auto-generated
//   users: z.array(z.string().uuid()).optional(),  // List of user IDs (UUIDs as strings)
// });

// module.exports = roomSchema;


// Define the schema for Room
const roomSchema = new mongoose.Schema({
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
  const Room = mongoose.model('Room', roomSchema);
  
  // Export both models
  module.exports =  Room ;