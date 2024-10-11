import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(1, {
    message: "Password must be at least 2 characters.",
  }),
});

export const registerSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().trim().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(1, {
    message: "Password must be at least 2 characters.",
  }),
});
