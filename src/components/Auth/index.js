import React from 'react'
import { useState } from 'react'
import Signin from '../Signin'
import Signup from '../Signup'
import './style.css'
const Auth = () => {
  const [isHidden, setIsHidden] = useState(true)
  return (
    <div className='auth'>
      <div className='main'>
        <div
          className={
            isHidden
              ? 'auth-container a-container '
              : 'auth-container a-container is-txl'
          }
          id='a-container'
        >
          <Signup isHidden={isHidden} setIsHidden={setIsHidden} />
        </div>
        <div
          className={
            isHidden
              ? 'auth-container b-container  is-z200'
              : 'auth-container b-container is-txl '
          }
          id='b-container'
        >
          <Signin />
        </div>
        <div
          className={isHidden ? 'switch   ' : 'switch is-txr'}
          id='switch-cnt'
        >
          <div className='switch__circle'></div>
          <div className='switch__circle switch__circle--t'></div>
          <div
            className={isHidden ? 'is-hidden' : 'switch__container '}
            id='switch-c1'
          >
            <h2 className='switch__title auth-title'>Welcome Back !</h2>
            <p className='switch__description description'>
              To keep connected with us please login with your personal info
            </p>
            <button
              className='switch__button auth-button switch-btn'
              onClick={() => setIsHidden(true)}
            >
              SIGN IN
            </button>
          </div>
          <div
            className={isHidden ? 'switch__container ' : ' is-hidden'}
            id='switch-c2'
          >
            <h2 className='switch__title auth-title'>Hello Friend !</h2>
            <p className='switch__description description'>
              Enter your personal details and start journey with us
            </p>
            <button
              className='switch__button auth-button switch-btn'
              onClick={() => setIsHidden(false)}
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
