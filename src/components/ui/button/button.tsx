'use client'
import React, { ButtonHTMLAttributes } from 'react'
import s from './button.module.css'

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type'
> {
  text: string
  variant?: 'default' | 'primary' | 'secondary' | 'text'
  fullWidth?: boolean
}

const Button = ({
  text,
  variant = 'default',
  fullWidth,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={
        fullWidth
          ? `${s.btn} ${s.full} ${s[`btn-${variant}`]}`
          : `${s.btn} ${s[`btn-${variant}`]}`
      }
      disabled={props.disabled}
    >
      {text}
    </button>
  )
}

export default Button
