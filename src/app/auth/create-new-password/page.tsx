'use client'
import Button from '@/src/components/ui/button/button'
import Card from '@/src/components/ui/card/card'
import CustomInput from '@/src/components/ui/input/input'
import {
  CreateNewPasswordSchema,
  CreateNewPasswordSchemaType,
} from '@/src/schemas/create-new-password.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import s from './create-new-password.module.css'

const CreateNewPassword = () => {
  const { control } = useForm<CreateNewPasswordSchemaType>({
    resolver: zodResolver(CreateNewPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
      token: '',
    },
  })
  return (
    <div className={s.container}>
      <Card width={378}>
        <div className={s.form_wrapper}>
          <h1 className={s.title}>Create New Password</h1>
          <form className={s.form}>
            <CustomInput
              control={control}
              name="password"
              labelText="New password"
              inputType="password"
              eyePassword
            />
            <CustomInput
              control={control}
              name="confirmPassword"
              labelText="Password confirmation"
              inputType="password"
              eyePassword
            />
            <p>Your password must be between 6 and 20 characters</p>
            <Button fullSize text="Create New Password" />
          </form>
        </div>
      </Card>
    </div>
  )
}

export default CreateNewPassword
