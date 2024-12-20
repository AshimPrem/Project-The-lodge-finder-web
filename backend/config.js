
require('dotenv').config();  // Load environment variables from .env file
const config = {
  jwtSecret: process.env.JWT_SECRET // Get JWT secret from the environment variable
};

module.exports = config;
