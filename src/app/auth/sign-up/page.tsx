'use client'
import Card from '@/src/components/ui/card/card'
import CustomInput from '@/src/components/ui/input/input'
import OAuthButtons from '@/src/components/ui/oauth-buttons/oauth-buttons'
import { SignUpSchema, SignUpSchemaType } from '@/src/schemas/sign-up.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import s from './sign-up.module.css'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import Button from '@/src/components/ui/button/button'
import CheckBox from '@/src/components/ui/check-box/check-box'

const SignUp = () => {
  const { handleSubmit, control } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: SignUpSchemaType) => console.log(data)
  return (
    <div className={s.container}>
      <Card width={378} height={504}>
        <div className={s.form_wrapper}>
          <h1 className={s.title}>Sign Up</h1>
          <OAuthButtons />
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              control={control}
              name="username"
              labelText="Username"
              inputType="text"
              placeholder="Username"
            />
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
            <CustomInput
              control={control}
              name="password_confirmation"
              labelText="Password confirmation"
              inputType="password"
              placeholder="Password confirmation"
            />
            <div className={s.checkbox_wrapper}>
              <CheckBox
                text={
                  <span className={s.checkbox_text}>
                    I agree to the{' '}
                    <Link href="/auth/terms-of-service">Terms of Service</Link>{' '}
                    and <Link href="/auth/privacy-policy">Privacy Policy</Link>
                  </span>
                }
              />
            </div>
            <Button
              fullSize
              onClick={() => handleSubmit(onSubmit)}
              text="Sign Up"
            />
          </form>
          <div className={s.form_link}>
            <p>Do you have an account?</p>
            <Link href={'/auth/sign-in'}>
              <Button type="text" text="Sign In" />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default SignUp
