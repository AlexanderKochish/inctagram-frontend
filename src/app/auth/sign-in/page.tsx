'use client'
import Button from '@/src/components/ui/button/button'
import Card from '@/src/components/ui/card/card'
import CheckBox from '@/src/components/ui/check-box/check-box'
import CustomInput from '@/src/components/ui/input/input'
import { SignInSchema, SignInSchemaType } from '@/src/schemas/sign-in.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import s from './sign-in.module.css'
import GoogleIcon from '../../../../public/icons/google-svgrepo-com 1.svg'
import GithubIcon from '../../../../public/icons/google-svgrepo-com 2.svg'
import Image from 'next/image'
import Link from 'next/link'

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
    <div className={s.container}>
      <Card width={378} height={504}>
        <div className={s.form_wrapper}>
          <h1 className={s.title}>Sign In</h1>
          <div className={s.oauth_container}>
            <button className={s.oauth_btn}>
              <Image
                src={GoogleIcon}
                width={36}
                height={36}
                alt="google icon"
              />
            </button>
            <button className={s.oauth_btn}>
              <Image
                src={GithubIcon}
                width={36}
                height={36}
                alt="github icon"
              />
            </button>
          </div>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
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
            <div className={s.forgotpass_link}>
              <a href="#">Forgot Password</a>
            </div>
            <Button
              fullSize
              onClick={() => handleSubmit(onSubmit)}
              text="Sign In"
            />
          </form>
          <div className={s.form_link}>
            <p>Don’t have an account?</p>
            <Link href={'/auth/sign-up'}>
              <Button type="text" text="Sign Up" />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default SignIn
