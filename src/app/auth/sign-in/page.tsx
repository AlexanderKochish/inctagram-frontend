'use client'
import Button from '@/src/components/ui/button/button'
import CheckBox from '@/src/components/ui/check-box/check-box'
import CustomInput from '@/src/components/ui/input/input'
import { SignInSchema, SignInSchemaType } from '@/src/schemas/sign-in.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const SignIn = () => {
  const { handleSubmit, control } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: SignInSchemaType) => console.log(data)
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          control={control}
          name="email"
          labelText="Email"
          inputType="email"
          placeholder="email@example.com"
        />
        <CustomInput
          control={control}
          name="password"
          labelText="Password"
          inputType="password"
          placeholder="Password"
        />
        <Button onClick={() => handleSubmit(onSubmit)} text="Sign In" />
        <CheckBox text="Hello custom  checkbox" />
      </form>
    </div>
  )
}

export default SignIn
