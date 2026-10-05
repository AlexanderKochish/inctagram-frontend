'use client'
import Link from 'next/link'
import s from './header.module.css'

import UKFlag from '../../../../public/icons/Flag United Kingdom.png'
import RUFlag from '../../../../public/icons/Flag Russia.png'
import SelectCustom from '../select/select'
import { useState } from 'react'
import Button from '../button/button'

const langList = [
  { id: crypto.randomUUID(), value: 'en', text: 'English', image: UKFlag },
  { id: crypto.randomUUID(), value: 'ru', text: 'Russian', image: RUFlag },
]

const Header = () => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <header className={s.header}>
      <Link className={s.logo} href="/">
        Inctagram
      </Link>
      <div className={s.header_right}>
        <SelectCustom
          list={langList}
          defaultValue="en"
          placeholder="Select language..."
          areaLabel="Language"
        />
        {!isAuth && (
          <div>
            <Link href={'/auth/sign-in'}>
              <Button variant="text" text="Log In" />
            </Link>
            <Link href={'/auth/sign-up'}>
              <Button text="Sign Up" />
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
