const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));


  

  // Define the schema for User
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password:{
      type:String,
      required:true
    }
   ,
    createdAt: {
      type: Date,
      default: Date.now,
    }
  });
  
  // Create the User model
  const User = mongoose.model('User', userSchema);

  module.exports = User