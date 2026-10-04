import s from './oauth-buttons.module.css'
import GoogleIcon from '../../../../public/icons/google-svgrepo-com 1.svg'
import GithubIcon from '../../../../public/icons/google-svgrepo-com 2.svg'

const OAuthButtons = () => {
  return (
    <div className={s.oauth_container}>
      <button className={s.oauth_btn}>
        <GoogleIcon />
      </button>
      <button className={s.oauth_btn}>
        <GithubIcon />
      </button>
    </div>
  )
}

export default OAuthButtons
