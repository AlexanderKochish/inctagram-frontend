'use client'
import Button from '@/src/components/ui/button/button'
import Card from '@/src/components/ui/card/card'
import CustomInput from '@/src/components/ui/input/input'
import { ForgotPasswordSchema } from '@/src/schemas/forgot-password.schema'
import { ForgotPasswordSchemaType } from '@/src/schemas/forgot-password.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import s from './forgot-password.module.css'
import ReCAPTCHA from 'react-google-recaptcha'

const ForgotPasswordPage = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const { control, handleSubmit } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })
  return (
    <div className={s.container}>
      <Card width={378} height={504}>
        <div className={s.form_wrapper}>
          <h1>Forgot Password</h1>
          <form
            className={s.form}
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <CustomInput
              control={control}
              name="email"
              inputType="email"
              placeholder="Epam@epam.com"
              labelText="Email"
            />
            <p>
              Enter your email address and we will send you further instructions
            </p>
            <Button size="large" text="Send Link" />
          </form>
          <Button size="large" text="Back to Sign In" variant="text" />
          <div className={s.recaptcha}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={(token) => setCaptchaToken(token)}
              onExpired={() => setCaptchaToken(null)}
              theme="dark"
              size="normal"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ForgotPasswordPage
