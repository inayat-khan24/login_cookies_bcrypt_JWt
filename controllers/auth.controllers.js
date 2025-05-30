
import { formModel } from "../mongoose/mongoose.js";
import { comparePassword, generateToken, hashPassword } from "../services/auth.services.js";





export const getRegisterPage = (req, res) => {
  // acces login file form views/auth/register
  res.render("auth/register");
};



// send data from registation form to mangodn 
export const postRegisterPage = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // firt we check that id is alreadt avlaible or not 
      const userExists = await formModel.findOne({ email: email });
    
     if (userExists) {
      console.log("User already exists");
      return res.redirect("/register"); // redirect back if user exists
    }

// this this is hashing function who there is services folder
const hashedPassword = await hashPassword (password)

    // Create and save the new user
    // second the we will give value after hashad then we have to give password:hashedPassoerd
    // because key and value both are not same that's why.
    const newUser = new formModel({ name, email, password: hashedPassword });
     await newUser.save();
    
     res.redirect("/login")
    
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error", error: error});
  }
};





//================================
//  old way to get cookes and set 
//=============================
// export const getHomePage = (req,res)=>{
// // for access views ejs file
// let isLoggedIn =  req.headers.cookie;
//     // first we break the base on ";" to converto into an  array 
//      // after that we remove whites space with the help of trim and
//      // we use startswith to find first element of isLoggedIn value in the array.
//     isLoggedIn = Boolean(isLoggedIn?.split(";")?.find((cookie)=>cookie.trim()
//     .startsWith(("isLoggedIn")))?.split("=")[1])
    
//     // now we gave this value to index.ejs file 
//     return res.render("index",{isLoggedIn})
// }






// post 



//================================
//  new way to get cookes and set 
//=============================
export const getHomePage = (req,res)=>{

   
    return res.render("index")
}

// get login
export const getLoginPage = (req, res) => {
  // acces login file form views/auth/login
  res.render("auth/login");
};

// login form
export const postLogin = async(req,res)=>{
try {
  const {email,password} = req.body
  const userExists = await formModel.findOne({email})
  console.log("user",userExists)

 if(!userExists) return res.redirect("/login")


// bcrypt.compare(plainTextPassword,hashedPassword);
const isPasswordValid = await comparePassword(password,userExists.password)

 // now for checking password exist or not 
 if(! isPasswordValid) return res.redirect("/login") 



    // set cookies and if we set path="/" like that then cookie take true every page
   // that's why we shuld give like that path="/" 
   // this is old way to get cookie
  //  res.setHeader("Set-Cookie","isLoggedIn=true; path=/")

  // this is new way to get cookie
  // res.cookie("isLoggedIn",true)


////  now we use jwd 
// step 1 we creat genratetoken which value we want to show to user
const token = generateToken({
  id : userExists.id,
  name : userExists.name,
  email : userExists.email
})

// first give token name we can give anything what i want to give name
// second give token which we want to show to user  
res.cookie("access_token",token)

     // if we will click login button then the page move to home page 
  res.redirect("/")

} catch (error) {
   console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error", error: error});
}


}
// after that go to congole and check in appliction in chooke and there this cookie 
// value avalible


export const getme= async(req,res)=>{
if(!req.user)  return res.send("Not logged in ")

  return res.send(`<h1>hey ${req.user.name} - ${req.user.email} `)

}
