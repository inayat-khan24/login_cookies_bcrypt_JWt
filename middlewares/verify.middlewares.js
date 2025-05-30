import { verifyJWTToken } from "../services/auth.services.js"

export const  verifyAuthentication = (req,res,next)=>{
  
const token = req.cookies.access_token  // that will get us in cookie we can check in appliction cookie

if(!token){
    // if we have no token then that value will be null
    req.user = null

    return next()

}
    //✅ if we have token then we will use that.
    try {
       
        const decodedToken = verifyJWTToken(token)
      req.user = decodedToken
      console.log("req.user", req.user)

    } catch (error) {
        req.user = null
    }

    //❗ we mast give after that if we will not give then loop will running conutnuesly
    return next()
}

// rules ℹ️ you can add any property to req, but :ℹ️
//✔️  Avoid overwriting existing properties. 
//✔️  use req.user for authentictaion
// ✔️  group custom properties under req.custom if needed
// keep the data lightweight. use objet and give value in key value pare if multiple data
// avlaible


