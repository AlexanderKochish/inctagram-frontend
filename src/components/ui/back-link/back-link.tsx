import s from './back-link.module.css'
import Link from 'next/link'
import ArrowLeft from '../../../../public/arrow-left.svg'
import Image from 'next/image'

interface BackLinkProps {
  href: string
  text: string
}

const BackLink = ({ href, text }: BackLinkProps) => {
  return (
    <Link href={href} className={s.container}>
      <Image
        className={s.icon}
        src={ArrowLeft}
        alt="Back"
        width={24}
        height={24}
      />
      <span>{text}</span>
    </Link>
  )
}

export default BackLink
