import { z } from 'zod';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const contactSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    phone: z.string().min(1, { message: "Phone is required" }),
    email: z.string().regex(emailRegex, { message: "Invalid email format" }),
    message: z.string().min(1, { message: "Message is required" }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
