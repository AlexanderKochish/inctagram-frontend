'use client'
import Button from '@/src/components/ui/button/button'
import CheckBox from '@/src/components/ui/check-box/check-box'

const SignIn = () => {
  return (
    <div style={{ backgroundColor: 'darkblue' }}>
      <h1>Sign In</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Button onClick={() => console.log('Sign In clicked')}>Sign In</Button>
        <CheckBox text="Hello custom  checkbox" />
      </form>
    </div>
  )
}

export default SignIn
