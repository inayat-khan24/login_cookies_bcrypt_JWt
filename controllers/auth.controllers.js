export const getRegisterPage = (req, res) => {
  // acces login file form views/auth/register
  res.render("auth/register");
};

export const getLoginPage = (req, res) => {
  // acces login file form views/auth/login
  res.render("auth/login");
};

export const getHomePage = (req,res)=>{
// for access views ejs file
let isLoggedIn =  req.headers.cookie;
    // first we break the base on ";" to converto into an  array 
     // after that we remove whites space with the help of trim and
     // we use startswith to find first element of isLoggedIn value in the array.
    isLoggedIn = Boolean(isLoggedIn?.split(";")?.find((cookie)=>cookie.trim()
    .startsWith(("isLoggedIn")))?.split("=")[1])
    
    // now we gave this value to index.ejs file 
    return res.render("index",{isLoggedIn})


}

// post 
export const postLogin = (req,res)=>{
   // set cookies and if we set path="/" like that then cookie take true every page
   // that's why we shuld give like that path="/" 
   res.setHeader("Set-Cookie","isLoggedIn=true; path=/")

    
    
   // if we will click login button then the page move to home page 
  res.redirect("/")
}