import React from 'react'
import Card from '../card/card'
import s from './registered-users.module.css'

const RegisteredUsers = () => {
  return (
    <Card width={972} height={72}>
      <div className={s.counter_wrapper}>
        <h2>Registered users:</h2>
        <div className={s.counter}>
          {(64563)
            .toString()
            .split('')
            .map((num) => (
              <span key={crypto.randomUUID()}>{num}</span>
            ))}
        </div>
      </div>
    </Card>
  )
}

export default RegisteredUsers
