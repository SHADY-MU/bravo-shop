import z from "zod";

const loginSchema = z.object({
  email: z.string().min(1 , {message : "Email is Require !"})
    .email({message:"this email not Valid"}),
  password: z.string().min(1 , {message:"password is require"}),
})



export default loginSchema