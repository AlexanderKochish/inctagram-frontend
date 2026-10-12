'use client'
import PostImage from '../../public/Mask group.jpg'
import s from './home.module.css'
import PostCard from '../components/ui/post-card/post-card'
import RegisteredUsers from '../components/ui/registered-users/registered-users'

const posts = [
  {
    id: 1,
    authorId: '2jhghjg2',
    img: PostImage,
    avatar: PostImage,
    username: 'Username',
    timestamp: '22 min ago',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor',
  },
  {
    id: 2,
    authorId: '2jhghjg2',
    img: PostImage,
    avatar: PostImage,
    username: 'Username',
    timestamp: '22 min ago',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor',
  },
  {
    id: 3,
    authorId: '2jhghjg2',
    img: PostImage,
    avatar: PostImage,
    username: 'Username',
    timestamp: '22 min ago',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor',
  },
  {
    id: 4,
    authorId: '2jhghjg2',
    img: PostImage,
    avatar: PostImage,
    username: 'Username',
    timestamp: '22 min ago',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor',
  },
]

export default function Home() {
  return (
    <div className={s.container}>
      <div className={s.inner_wrapper}>
        <RegisteredUsers />

        <ul className={s.list}>
          {posts &&
            posts.map((post) => (
              <li key={post.id}>
                <PostCard post={post} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
