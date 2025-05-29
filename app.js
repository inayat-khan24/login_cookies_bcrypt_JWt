import express from "express";

import { authRoutes } from "./routes/auth.routes.js"; // ✅ Fixed typo: "auth.riutes.js" ➜ "auth.routes.js"

const app = express();
const PORT = 3005

// when me give value from input tag and that data comes in 
// URL-encoded format and "urlencoded store all data in req.body"
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
