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
      <form class='form' id='b-form' method='' action='' onSubmit={logData}>
        <h2 class='form_title auth-title'>Sign in to Website</h2>
        <div class='form__icons'>
          <img class='form__icon' src='' alt='' />
          <img class='form__icon' src='' />
          <img class='form__icon' src='' />
        </div>
        <span class='form__span'>or use your email account</span>
        <input
          class='form__input'
          type='text'
          name='email'
          placeholder='Email'
          onChange={handleSign}
        />

        <input
          class='form__input'
          type='password'
          name='password'
          onChange={handleSign}
          placeholder='Password'
        />
        <a class='form__link'>Forgot your password?</a>
        <button class='form__button auth-button submit' type='submit'>
          SIGN IN
        </button>
      </form>
    </div>
  )
}

export default Signin
