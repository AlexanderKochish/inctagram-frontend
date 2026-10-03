import React from 'react'
import BackLink from '../back-link/back-link'
import s from './policies.module.css'

interface PoliciesProps {
  title?: string
  content?: React.ReactNode
}

const Policies = ({ title, content }: PoliciesProps) => {
  return (
    <div className={s.container}>
      <div className={s.back_link_wrapper}>
        <BackLink href="/auth/sign-up" text="Back to Sign Up" />
      </div>
      <h1>{title}</h1>
      <>{content}</>
    </div>
  )
}

export default Policies
