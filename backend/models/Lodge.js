
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));


// Define the schema for Room
const lodgeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description:{
        type:String,
        required:true
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