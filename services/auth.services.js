import bcrypt  from "bcrypt"





export const hashPassword = async (password)=>{
     //  first we hashing password with bcrypt and and we get password form uthcontrollers  
    //   second we use salt to porvid extra complex number like 10
return  await bcrypt.hash(password,10)
}


// we will compare use pass and which password shore in database they compare both
export const comparePassword= async(password,hashpassword)=>{
 return await bcrypt.compare(password,hashpassword)
}




