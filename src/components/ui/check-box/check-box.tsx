'use client'

import React, { useId, useState } from 'react'
import s from './check-box.module.css'

interface CheckBoxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  text?: string
}

export const CheckBox = ({
  text = 'Click me',
  checked: controlledChecked,
  defaultChecked = false,
  disabled = false,
  onChange,
  ...props
}: CheckBoxProps) => {
  const id = useId()
  const [internalChecked, setInternalChecked] = useState(defaultChecked)

  const isChecked =
    controlledChecked !== undefined ? controlledChecked : internalChecked

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    if (controlledChecked === undefined) {
      setInternalChecked(e.target.checked)
    }
    onChange?.(e)
  }

  return (
    <label htmlFor={id} className={s.container}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className={s.real_input}
        {...props}
      />
      <span className={s.checkbox_container}>
        <span
          className={`${s.custom_checkbox} ${isChecked ? s.checked : ''}`}
        />
      </span>
      {text && <span>{text}</span>}
    </label>
  )
}

export default CheckBox
