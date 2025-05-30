// Import argon2 for password hashing
import argon2 from "argon2";

// Import jsonwebtoken (correct the typo "jwd")
import jwt from "jsonwebtoken";

// Use a secure secret (should come from .env ideally)
const JWT_SECRET = "asdf"; // <-- move to process.env.JWT_SECRET in production

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
