import z from "zod";

const usernameRegex = /^[a-zA-Z0-9]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const loginSchema = z.object({
  email: z
    .email({ message: "Invalid email format" })
    .regex(emailRegex, { message: "Email contains forbidden characters" }),
  password: z.string().min(8),
});

export const signUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .regex(usernameRegex, { message: "Username can only contain letters and numbers" }),
  email: z
    .email({ message: "Invalid email format" })
    .regex(emailRegex, { message: "Email contains forbidden characters" }),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});