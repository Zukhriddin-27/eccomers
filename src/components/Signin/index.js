import { message } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [body, setBody] = useState({})
  const navigate = useNavigate()

  const handleSign = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    })
  }

  const logData = (e) => {
    e.preventDefault()

    fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        info()
        navigate('/home')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const info = () => {
    message.info('Succesfully Logged')
  }

  return (
    <div>
      <form className='form' id='b-form' method='' action='' onSubmit={logData}>
        <h2 className='form_title auth-title'>Sign in to Website</h2>
        <div className='form__icons'>
          <img className='form__icon' src='/assets/search.png' alt='' />
          {/* eslint-disable-next-line */}
          <img className='form__icon' src='/assets/facebook.png' />
          {/* eslint-disable-next-line */}
          <img className='form__icon' src='/assets/apple.png' />
        </div>
        <span className='form__span'>or use your email account</span>
        <input
          className='form__input'
          type='text'
          name='email'
          placeholder='Email'
          onChange={handleSign}
        />

        <input
          className='form__input'
          type='password'
          name='password'
          onChange={handleSign}
          placeholder='Password'
        />
        {/* eslint-disable-next-line */}
        <a className='form__link'>Forgot your password?</a>
        <button className='form__button auth-button submit' type='submit'>
          SIGN IN
        </button>
      </form>
    </div>
  )
}

export default Signin
