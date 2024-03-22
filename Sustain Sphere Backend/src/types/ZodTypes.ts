import { z } from 'zod'

export const signupInput = z.object({
    email: z.string().max(100).min(3),
    password: z.string().max(30).min(8),
    detailsFilled : z.boolean()
});

export type SignupParams = z.infer<typeof signupInput>;

export const signinInput = z.object({
    email: z.string().max(100).min(3),
    password: z.string()
});

export type LoginParams = z.infer<typeof signinInput>;

export const registerInput = z.object({
    email: z.string().max(100).min(3),
    password: z.string().max(30).min(8),
});
