import { Router } from "express"; // Step 1: Import Router from express
import * as authControllers from "../controllers/auth.controllers.js"; // Step 2: Import auth controller functions

// Step 1: Create router instance
const router = Router();

// Step 2: Define auth routes
router.get("/register", authControllers.getRegisterPage);
router.post("/register", authControllers.postRegisterPage);

router.get("/", authControllers.getHomePage);

// router.get("/login", authControllers.getLoginPage);
// router.post("/login", authControllers.postLogin);

// if both endpoint is same then we can write like that
router.route("/login")
 .get(authControllers.getLoginPage).post(authControllers.postLogin);

 //* we make another route
 router.route('/me').get(authControllers.getme) 

 router.route('/logout').get(authControllers.logoutUser) 

// Step 5: Export the router
export const authRoutes = router;
