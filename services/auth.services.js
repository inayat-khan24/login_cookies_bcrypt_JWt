// Import argon2 for password hashing
import argon2 from "argon2";

// Import jsonwebtoken 
import jwt from "jsonwebtoken";

// Use a secure secret (ideally store this in environment variables)
const JWT_SECRET = process.env.JWT_SECRET || "asdf"; 

// Hash password using argon2
export const hashPassword = async (password) => {
  return await argon2.hash(password);
};

// Compare plain password with hashed password
export const comparePassword = async (plainPassword, hashedPassword) => {
  return await argon2.verify(hashedPassword, plainPassword);
};

// Generate JWT token using user object
export const generateToken = ({ id, name, email }) => {
  return jwt.sign({ id, name, email }, JWT_SECRET, {
    expiresIn: "30d", // Token valid for 30 days
  });
};

// Verify JWT token and return decoded payload
export const verifyJWTToken = (token) => {
  // jwt.verify throws error if token is invalid or expired, so handle it where you call this function
  return jwt.verify(token, JWT_SECRET);
};
