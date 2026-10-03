import Image from 'next/image'
import React from 'react'
import s from './oauth-buttons.module.css'
import GoogleIcon from '../../../../public/icons/google-svgrepo-com 1.svg'
import GithubIcon from '../../../../public/icons/google-svgrepo-com 2.svg'

const OAuthButtons = () => {
  return (
    <div className={s.oauth_container}>
      <button className={s.oauth_btn}>
        <Image src={GoogleIcon} width={36} height={36} alt="google icon" />
      </button>
      <button className={s.oauth_btn}>
        <Image src={GithubIcon} width={36} height={36} alt="github icon" />
      </button>
    </div>
  )
}

export default OAuthButtons
