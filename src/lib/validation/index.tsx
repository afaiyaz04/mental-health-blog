import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Too short" }),
  username: z.string().min(2).max(50),
  email: z.string().min(2, { message: "Too short" }),
  password: z
    .string()
    .min(8, { message: "Password needs top be atleast 8 character." }),
});

export const SigninValidation = z.object({
  email: z.string().min(2, { message: "Too short" }),
  password: z
    .string()
    .min(8, { message: "Password needs top be atleast 8 character." }),
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string(),
  tags: z.string(),
});
