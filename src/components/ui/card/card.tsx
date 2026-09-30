import { ReactNode } from 'react'
import s from './card.module.css'

interface Props {
  width?: number
  height?: number
  children: ReactNode
}

const Card = ({ width = 100, height = 100, children }: Props) => {
  return (
    <div style={{ minHeight: height, width }} className={s.card}>
      {children}
    </div>
  )
}

export default Card
