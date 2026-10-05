import React from 'react'
import s from './sidebar.module.css'
import Link from 'next/link'
import HomeIcon from '../../../../public/icons/home-outline.svg'
import PlusIcon from '../../../../public/icons/plus-square-outline.svg'
import ProfileIcon from '../../../../public/icons/profile.svg'
import MessageIcon from '../../../../public/icons/messanger.svg'
import SearchIcon from '../../../../public/icons/search.svg'
import TrendingUpIcon from '../../../../public/icons/trending-up-outline.svg'
import BookmarkIcon from '../../../../public/icons/bookmark-outline.svg'
import LogoutIcon from '../../../../public/icons/logout.svg'

const Sidebar = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li>
          <Link href="/">
            <HomeIcon className={s.icon} />
            <span>Feed</span>
          </Link>
        </li>
        <li>
          <Link href="/create">
            <PlusIcon className={s.icon} />
            <span>Create</span>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <ProfileIcon className={s.icon} />
            <span>profile</span>
          </Link>
        </li>
        <li>
          <Link href="/messanger">
            <MessageIcon className={s.icon} />
            <span>Messanger</span>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <SearchIcon className={s.icon} />
            <span>Search</span>
          </Link>
        </li>
      </ul>

      <ul className={s.list}>
        <li>
          <Link href="/statistics">
            <TrendingUpIcon className={s.icon} />
            <span>Statistics</span>
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            <BookmarkIcon className={s.icon} />
            <span>Favorites</span>
          </Link>
        </li>
      </ul>

      <div className={s.logout}>
        <Link href="/auth/sign-in">
          <LogoutIcon className={s.icon} />
          <span>Log out</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
