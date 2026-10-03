'use client'
import { useForm } from 'react-hook-form'
import CustomInput from '../input/input'
import Button from '../button/button'
import Image from 'next/image'
import CongratulationsImage from '../../../../public/bro.svg'
import s from './resend-verification-link.module.css'

export const ResendVerificationLink = () => {
  'use client'
  const { control } = useForm({
    defaultValues: {
      email: '',
    },
  })
  return (
    <div className={s.container}>
      <h1>Email verification link expired</h1>
      <p>
        Looks like the verification link has
        <br /> expired. Not to worry, we can send the
        <br /> link again
      </p>
      <form className={s.form}>
        <CustomInput
          control={control}
          name="email"
          placeholder="Epam@epam.com"
          labelText="Email"
          inputType="email"
        />
        <Button text="Resend verification link" fullSize />
      </form>
      <Image
        loading="eager"
        src={CongratulationsImage}
        alt="Congratulations"
        width={432}
        height={300}
      />
    </div>
  )
}
