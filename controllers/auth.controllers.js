export const getRegisterPage = (req, res) => {
  res.render("auth/register");
};

export const getLoginPage = (req, res) => {
  // login rout
  res.render("auth/login");
};

export const getHomePage = (req,res)=>{

res.render("index");
}

// post 
export const postLogin = (req,res)=>{
   // set cookies
   res.setHeader("Set-Cookie","isLoggedIn=true; path=/;")
    
   // if we will click login button then the page move to home page 
  res.redirect("/")
}