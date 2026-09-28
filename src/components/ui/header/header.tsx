import Link from 'next/link'
import React from 'react'
import s from './header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <Link className={s.logo} href="/">
        Inctagram
      </Link>
      <div></div>
    </header>
  )
}

export default Header
