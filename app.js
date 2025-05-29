import express from "express";

import { authRoutes } from "./routes/auth.routes.js"; // ✅ Fixed typo: "auth.riutes.js" ➜ "auth.routes.js"

const app = express();
const PORT = 3005

// Middleware
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public")); // Uncomment if serving static files

// View engine
app.set("view engine", "ejs");

// Routes

app.use(authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
