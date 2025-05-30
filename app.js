import express from "express";

import { authRoutes } from "./routes/auth.routes.js"; // 
import cookieParser from "cookie-parser";
import { verifyAuthentication } from "./middlewares/verify.middlewares.js";

const app = express();
const PORT = 3005

// when me give value from input tag and that data comes in 
// URL-encoded format and "urlencoded store all data in req.body"
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
// app.use(express.static("public")); // Uncomment if serving static files

// View engine
app.set("view engine", "ejs");

// we use cookes
app.use(cookieParser())

// this is must be after cookieParser middleware
app.use(verifyAuthentication)

app.use((req,res,next)=>{
  //* now we don't need of write req.user of this methoad. 
  //* only for ejs files who is in views folder 
  res.locals.user = req.user;

  return next()            //! next() is  must 

});

//* how it works : 
//?  this middleware runs on every request before reaching the route handlers.
//?  res.locals is an object that persists throughout the request-response cycle

// Routes
app.use(authRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
