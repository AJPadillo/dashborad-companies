import { z } from "zod";

export const forSchema = z.object({
    name: z.string().min(2).max(50),
    role: z.string(),
    email: z.string().min(2).max(50),
    phone: z.string().min(2).max(50),
})