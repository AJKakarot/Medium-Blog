import z from 'zod';
export const signUpInput = z.object({
    name: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(5),
});
export const signInInput = z.object({
    email: z.string().email(),
    password: z.string().min(5),
});
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
});
export const updateBlogInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    id: z.string(),
});
//# sourceMappingURL=index.js.map