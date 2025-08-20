import z from "zod";

const resgisterSchema = z.object({
  firstName: z.string().min(3 , {message : "First Name is Require !"}),
  lastName: z.string().min(3 , {message : "Last Name is Require !"}),
  email: z.string().min(1 , {message : "Email is Require !"})
    .email({message:"this email not Valid"}),
  password: z.string().min(6 , {message:"password must be 6 character at least"}),
  confirmPassword: z.string().min(1 , {message:"confirm password is require"})
}).refine((same)=> same.password === same.confirmPassword , {message:"password is not matching the password" , path:['confirmPassword']})



export default resgisterSchema