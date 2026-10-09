import React from 'react'
import s from './profile.module.css'
import Image from 'next/image'
import Avatar from '../../../../public/Mask group.jpg'
import Link from 'next/link'

const posts = [
  { id: 1, img: Avatar },
  { id: 2, img: Avatar },
  { id: 3, img: Avatar },
  { id: 4, img: Avatar },
  { id: 5, img: Avatar },
  { id: 6, img: Avatar },
  { id: 7, img: Avatar },
  { id: 8, img: Avatar },
]

const ProfilePage = () => {
  return (
    <div className={s.container}>
      <div className={s.details_wrapper}>
        <div>
          <Image src={Avatar} alt="profile avatar" className={s.avatar} />
        </div>
        <div className={s.details}>
          <h1>Username</h1>
          <ul className={s.followers_list}>
            <li>
              <span className={s.num}>2 218</span>
              <span>Following</span>
            </li>
            <li>
              <span className={s.num}>2 358</span>
              <span>Followers</span>
            </li>
            <li>
              <span className={s.num}>2 764</span>
              <span>Publications</span>
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco{' '}
            <Link className={s.link} href={'/'}>
              laboris nisi ut aliquip ex ea commodo consequat.
            </Link>
          </p>
        </div>
      </div>
      <div className={s.posts_wrapper}>
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <Image
                width={100}
                height={100}
                src={Avatar}
                alt="post image"
                className={s.post_img}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default ProfilePage
