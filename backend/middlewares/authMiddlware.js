const User = require("../models/User")
const jwt = require('jsonwebtoken')
const config = require('../config')


 const authenticateUser = async (req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    // what if authorization header empty ?
    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
      }

      try {
        
        // Verify token and decode the user token 
        const decoded = jwt.verify(token, config.jwtSecret);
        //attaching user information to the request object for further use.
        req.user = decoded
        const user = await User.findOne({email:req.user.email});  // Assuming the payload has email
        if (!user) {
          return res.status(401).json({ message: 'User not found' });
        }
        // Proceed to the next middleware/route handler
        next();
      } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
      }
}

module.exports = authenticateUser