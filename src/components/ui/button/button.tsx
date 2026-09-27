'use client'
import React from 'react'
import s from './button.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  type?: 'default' | 'primary' | 'secondary' | 'text'
}

const Button = ({ children, onClick, type = 'text' }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${s.btn} ${s[`btn-${type}`]}`}>
      {children}
    </button>
  )
}

export default Button
