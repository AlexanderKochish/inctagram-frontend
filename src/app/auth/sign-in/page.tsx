'use client'
import Button from '@/src/components/ui/button/button'
import React from 'react'

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Button onClick={() => console.log('Sign In clicked')}>
          Sign In
        </Button>
      </form>
    </div>
  )
}

export default SignIn
