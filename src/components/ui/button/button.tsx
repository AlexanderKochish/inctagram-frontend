'use client'
import React, { ButtonHTMLAttributes } from 'react'
import s from './button.module.css'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: 'default' | 'primary' | 'secondary' | 'text'
  size?: 'small' | 'default' | 'large'
}

const Button = ({ text, variant = 'default', size, ...props }: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${s.btn} ${s[`size-${size}`]} ${s[`btn-${variant}`]}`}
      disabled={props.disabled}
    >
      {text}
    </button>
  )
}

export default Button
