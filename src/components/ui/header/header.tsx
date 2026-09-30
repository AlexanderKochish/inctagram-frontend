import Link from 'next/link'
import s from './header.module.css'

import UKFlag from '../../../../public/icons/Flag United Kingdom.png'
import RUFlag from '../../../../public/icons/Flag Russia.png'
import SelectCustom from '../select/select'

const langList = [
  { id: crypto.randomUUID(), value: 'en', text: 'English', image: UKFlag },
  { id: crypto.randomUUID(), value: 'ru', text: 'Russian', image: RUFlag },
]

const Header = () => {
  return (
    <header className={s.header}>
      <Link className={s.logo} href="/">
        Inctagram
      </Link>
      <div>
        <SelectCustom
          list={langList}
          defaultValue="en"
          placeholder="Select language..."
          areaLabel="Language"
        />
      </div>
    </header>
  )
}

export default Header
