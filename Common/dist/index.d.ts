import z from 'zod';
export declare const signUpInput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    password: z.ZodString;
}, z.z.core.$strip>;
export declare const signInInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.z.core.$strip>;
export declare const createBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, z.z.core.$strip>;
export declare const updateBlogInput: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
}, z.z.core.$strip>;
export type SignUpInput = z.infer<typeof signUpInput>;
export type SignInInput = z.infer<typeof signInInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
//# sourceMappingURL=index.d.ts.map