// import bcrypt  from "bcrypt"
import argon2 from "argon2"





export const hashPassword = async (password)=>{
     //  first we hashing password with bcrypt and and we get password form uthcontrollers  
    //   second we use salt to porvid extra complex number like 10
// return  await bcrypt.hash(password,10)
return  await argon2.hash(password)
}


// we will compare use pass and which password shore in database they compare both
export const comparePassword= async(password,hashpassword)=>{
  //  bcrypt syntext  bcrypt.compare(plainText,hashpassword)
//  return await bcrypt.compare(password,hashpassword)
  //  argon2 syntext  argon2.verify(hashpassword,plainText)
  return await argon2.verify(hashpassword,password)

}




