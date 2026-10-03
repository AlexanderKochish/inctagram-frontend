import z from 'zod'

export const SignUpSchema = z
  .object({
    username: z.string().min(3, 'Username must be at least 3 characters long'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    password_confirmation: z
      .string()
      .min(6, 'Password confirmation must be at least 6 characters long'),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Passwords do not match',
    path: ['password_confirmation'],
  })

export type SignUpSchemaType = z.infer<typeof SignUpSchema>
