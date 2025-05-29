export const getRegisterPage = (req, res) => {
  res.render("auth/register");
};

export const getLoginPage = (req, res) => {
  //
  res.render("auth/login");
};

export const getHomePage = (req,res)=>{

res.render("index");
}

// post 
export const postLogin = (req,res)=>{
   // set cookies
   res.setHeader("Set-Cookie","isLoggedIn=true; path=/;")
  res.redirect("/")
}