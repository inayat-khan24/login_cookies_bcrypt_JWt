import mongoose from "mongoose";

try {
  await mongoose.connect("mongodb://localhost:27017/formDataAuth");
  mongoose.set("debug", true);
  console.log("✅ MongoDB connected successfully");
} catch (error) {
  console.error("❌ MongoDB connection failed:", error.massage);
}

// Define schema
const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 255,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 255,
    },
    password: {
      type: String,
      required: true,
      maxlength: 255,
    },
  },
  {
    timestamps: true, 
  }
);

// Create model
export const formModel = mongoose.model("User", formSchema);


