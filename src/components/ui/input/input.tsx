import { InputHTMLAttributes, ReactNode, useState } from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import s from './input.module.css'
import EyeIcon from '../../../../public/icons/eye.svg'
import EyeOffIcon from '../../../../public/icons/eye-off.svg'

interface MyInputProps<T extends FieldValues> extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange' | 'value'
> {
  control: Control<T>
  name: Path<T>
  icon?: ReactNode
  eyePassword?: boolean
  labelText?: string
  inputType: 'text' | 'email' | 'password' | 'search'
}

const CustomInput = <TFieldValues extends FieldValues = FieldValues>({
  inputType = 'text',
  name,
  labelText,
  icon,
  control,
  eyePassword = false,
  ...props
}: MyInputProps<TFieldValues>) => {
  const [showPassword, setShowPassword] = useState(false)
  const { field, fieldState } = useController<TFieldValues>({ name, control })

  return (
    <div className={s.input_container}>
      <label className={s.label} htmlFor={props.id}>
        {labelText}
      </label>
      <div className={fieldState.error ? s.input_error : s.input_wrapper}>
        {icon}
        <input
          className={s.input}
          type={showPassword ? 'text' : inputType}
          id={props.id}
          placeholder={props.placeholder}
          {...props}
          {...field}
        />
        {eyePassword && (
          <button
            className={s.eye_button}
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <EyeIcon className={s.eye_icon} />
            ) : (
              <EyeOffIcon className={s.eye_icon} />
            )}
          </button>
        )}
      </div>
      {fieldState.error && (
        <span className={s.error}>{fieldState.error.message}</span>
      )}
    </div>
  )
}

export default CustomInput
