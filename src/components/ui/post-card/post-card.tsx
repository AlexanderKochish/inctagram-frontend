'use client'
import { useState } from 'react'
import s from './post-card.module.css'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Post {
  post: {
    img: StaticImageData
    avatar: StaticImageData
    username: string
    timestamp: string
    desc: string
    authorId: string
  }
}

const PostCard = ({
  post: { avatar, desc, img, timestamp, username, authorId },
}: Post) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className={s.post_wrapper}>
      <Image
        className={isExpanded ? s.imgExpanded : s.img}
        loading="eager"
        src={img}
        alt="post image"
      />
      <Link className={s.profile_link} href={`/profile/${authorId}`}>
        <div className={s.user}>
          <Image
            className={s.avatar}
            loading="eager"
            src={avatar}
            alt="post image"
            width={50}
            height={50}
          />
          <span className={s.name}>{username}</span>
        </div>
      </Link>
      <div className={s.time}>{timestamp}</div>
      <p className={s.text}>
        {isExpanded ? desc : `${desc.slice(0, 80)}... `}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className={s.btn}
        >
          {isExpanded ? ' Hide' : 'Show more'}
        </button>
      </p>
    </div>
  )
}

export default PostCard
