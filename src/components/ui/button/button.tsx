'use client'
import React, { ButtonHTMLAttributes } from 'react'
import s from './button.module.css'

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type'
> {
  text: string
  type?: 'default' | 'primary' | 'secondary' | 'text'
  fullSize?: boolean
}

const Button = ({
  text,
  type = 'default',
  fullSize,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={
        fullSize
          ? `${s.btn} ${s.full} ${s[`btn-${type}`]}`
          : `${s.btn} ${s[`btn-${type}`]}`
      }
      disabled={props.disabled}
    >
      {text}
    </button>
  )
}

export default Button
