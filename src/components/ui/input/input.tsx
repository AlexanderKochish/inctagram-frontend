import { InputHTMLAttributes, ReactNode } from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import s from './input.module.css'

interface MyInputProps<T extends FieldValues> extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange' | 'value'
> {
  control: Control<T>
  name: Path<T>
  icon?: ReactNode
  labelText?: string
  inputType: 'text' | 'email' | 'password' | 'search'
}

const CustomInput = <TFieldValues extends FieldValues = FieldValues>({
  inputType = 'text',
  name,
  labelText,
  icon,
  control,
  ...props
}: MyInputProps<TFieldValues>) => {
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
          type={inputType}
          id={props.id}
          placeholder={props.placeholder}
          {...props}
          {...field}
        />
      </div>
      {fieldState.error && (
        <span className={s.error}>{fieldState.error.message}</span>
      )}
    </div>
  )
}

export default CustomInput
