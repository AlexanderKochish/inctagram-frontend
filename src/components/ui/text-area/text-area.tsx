'use client'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import s from './text-area.module.css'

import React, { ReactNode, TextareaHTMLAttributes } from 'react'

interface TextAreaProps<T extends FieldValues> extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'type' | 'onChange' | 'value'
> {
  control: Control<T>
  name: Path<T>
  icon?: ReactNode
  label?: string
}

const TextArea = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  icon,
  label,
  placeholder,
  id,
  ...props
}: TextAreaProps<TFieldValues>) => {
  const { field, fieldState } = useController<TFieldValues>({ name, control })
  return (
    <fieldset className={s.wrapper}>
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        className={fieldState.error ? s.textarea_error : s.textarea}
        id={id}
        placeholder={placeholder}
        {...props}
        {...field}
      />
      {fieldState.error && (
        <span className={s.error}>{fieldState.error.message}</span>
      )}
    </fieldset>
  )
}

export default TextArea
