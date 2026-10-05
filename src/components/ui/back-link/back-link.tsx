'use client'
import s from './back-link.module.css'
import Link from 'next/link'
import ArrowLeft from '../../../../public/arrow-left.svg'

interface BackLinkProps {
  href: string
  text: string
}

const BackLink = ({ href, text }: BackLinkProps) => {
  return (
    <Link href={href} className={s.container}>
      <ArrowLeft />
      <span>{text}</span>
    </Link>
  )
}

export default BackLink
