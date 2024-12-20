const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bodyParser = require('body-parser')
const jwt = require ('jsonwebtoken')
const JWT_SECRET = "ashimSecret"
router.use(bodyParser.json())

// validation/userSchema.js
const { z } = require('zod');
const bcrypt = require('bcrypt');

// Define the schema for user input validation
const userSchema = z.object({
  name: z.string()
    .min(1, "Name is required") // Ensures the name is not empty
    .max(100, "Name can't be longer than 100 characters"), // Optional, but limits name length
  email: z.string()
    .email("Invalid email format") // Validates email format 
    .min(1, "Email is required") // Ensures email is provided
    .max(100, "Email can't be longer than 100 characters"), // Optional length restriction
  password: z.string()
    .min(6, "Password must be at least 6 characters long") // Password length validation
    .max(100, "Password can't be longer than 100 characters"), // Optional length restriction
});

// Create a new user (POST /users)
router.post('/signup', async (req, res) => {
    try {
      // Validate the incoming data against the Zod schema
      const parsedData = userSchema.parse(req.body); // This will throw an error if validation fails
        
      // If validation is successful, create a new user
      const { name, email, password } = parsedData;
      const existingUser = await User.findOne({
        email
      })
      // we can optimize it
      if(existingUser!=null && existingUser.email==email){
         res.status(403).json({
           message:"User already exist with this email"
         })
      }
      
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: hashedPassword
      });
      const token = jwt.sign({email},JWT_SECRET)
      //also add validations whether the user already exist or not
      await newUser.save();
      //send jwt token 
      res.status(201).json({ message: 'User created successfully', user: newUser , token});
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Zod validation error
        return res.status(400).json({
            message:"User creation failed for some wrong input ! please enter valid credentials"
        });
      }
    //   res.status(500).json({ error: err.message });
    }
  })

  const userZodSchemaForSignin = z.object({
    email: z.string()
    .email("Invalid email format") // Validates email format 
    .min(1, "Email is required") // Ensures email is provided
    .max(100, "Email can't be longer than 100 characters"), // Optional length restriction
  password: z.string()
    .min(6, "Password must be at least 6 characters long") // Password length validation
    .max(100, "Password can't be longer than 100 characters"), // Optional length restriction
  })

  router.post("/signin", async function (req, res) {
    try {
      // Check if the user has sent a JWT token
      const token = req.headers.authorization?.split(' ')[1]; // Assuming the token is sent in the Authorization header as "Bearer <token>"
  
      if (token) {
        // Verify the JWT token to check if the user is already signed in
        jwt.verify(token, JWT_SECRET, async (err, decoded) => {
          if (err) {
            return res.status(401).json({
              message: "Invalid or expired token"
            });
          }
  
          // Token is valid, user is already signed in
          return res.status(200).json({
            message: "Sign-in via JWT token successful now I let you access my database",
            token: token,  // Return the same token to avoid sending a new one
          });
        });
      } else {
        // No token, so continue with the usual email/password authentication
  
        // Validate the input data (email and password) using Zod
        const parsedData = userZodSchemaForSignin.parse(req.body);
        const { email, password } = parsedData;
  
        // Find user by email
        const existingUser = await User.findOne({ email });
  
        if (!existingUser) {
          return res.status(404).json({
            message: "User not found, please sign up first."
          });
        }
  
        // Compare the entered password with the stored hash
        const isMatch = await bcrypt.compare(password, existingUser.password);
  
        if (!isMatch) {
          return res.status(404).json({
            message: "Incorrect password, please try again."
          });
        }
  
        // Generate a new JWT token for the user
        const newToken = jwt.sign({ email: existingUser.email }, JWT_SECRET, { expiresIn: '1h' });
        
        res.status(200).json({
          message: "Sign-in successful!",
          token: newToken
        });
      }
    } catch (err) {
      return res.status(400).json({
        message: "Please enter correct credentials",
        error: err.message
      });
    }
  });
  
module.exports=router


