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
import DialogDemo from '@/src/components/ui/modal/modal'
import { useState } from 'react'

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { handleSubmit, control } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: SignUpSchemaType) => {
    console.log(data)
    setIsOpen((prev) => !prev)
  }
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
              eyePassword
            />
            <CustomInput
              control={control}
              name="password_confirmation"
              labelText="Password confirmation"
              inputType="password"
              placeholder="Password confirmation"
              eyePassword
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
              size="large"
              onClick={() => handleSubmit(onSubmit)}
              text="Sign Up"
            />
          </form>
          <div className={s.form_link}>
            <p>Do you have an account?</p>
            <Link href={'/auth/sign-in'}>
              <Button variant="text" text="Sign In" />
            </Link>
          </div>
        </div>
      </Card>
      <DialogDemo isOpen={isOpen} setIsOpen={setIsOpen} title="Email sent">
        <div className={s.modal_content}>
          <p>
            We have sent a link to confirm your email to
            <br /> epam@epam.com
          </p>
          <div className={s.modal_btn}>
            <Button size="small" text="OK" />
          </div>
        </div>
      </DialogDemo>
    </div>
  )
}

export default SignUp
