import Button from '@/src/components/ui/button/button'
import Image from 'next/image'
import Link from 'next/link'
import CongratulationsImage from '../../../../public/bro.svg'
import s from './congratulations.module.css'

const Congratulations = () => {
  return (
    <div className={s.container}>
      <h1>Congratulations!</h1>
      <p>Your email has been confirmed.</p>
      <Link href="/auth/sign-in">
        <Button text="Sign In" />
      </Link>
      <Image
        loading="eager"
        src={CongratulationsImage}
        alt="Congratulations"
        width={432}
        height={300}
      />
    </div>
  )
}

export default Congratulations
