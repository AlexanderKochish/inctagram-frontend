'use client'
import React from 'react'
import s from './button.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  type?: 'default' | 'primary' | 'secondary' | 'text'
  disabled?: boolean
}

const Button = ({ children, onClick, type = 'text', disabled = false }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${s.btn} ${s[`btn-${type}`]}`} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
