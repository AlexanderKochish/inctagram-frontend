import z from 'zod'

export const SignInSchema = z.object({
  email: z.string(),
  password: z
    .string()
    .min(4, { error: 'Min length must be more then 4 letters' }),
})

export type SignInSchemaType = z.infer<typeof SignInSchema>
