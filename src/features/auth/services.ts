import z from "zod";

const registerSchema = z
  .object({
    name: z.string().min(3, "Name is too short"),
    email: z.email('Invalid email'),
    password: z.string().min(6, "Minimum 6 characters"),
    confirmPassword: z.string().min(6, "Minimum 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

  const loginSchema = z
  .object({
    email: z.email('Invalid email'),
    password: z.string().min(6, "Minimum 6 characters"),
  })
  

export {registerSchema, loginSchema}