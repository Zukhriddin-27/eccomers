import { message } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useRequest from '../../hooks/useRequest'

const Signup = () => {
  const navigate = useNavigate()
  const request = useRequest()
  const [body, setBody] = useState({})

  const handleReg = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    })
  }
  const ourFields = async (e) => {
    e.preventDefault()
    // eslint-disable-next-line
    // if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body.email)) {
    //   info()
    //   return
    // }
    fetch(`https://api.escuelajs.co/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        console.log(res.status === 400)
        if (res.status === 400) {
          info('Password must contain only letters and numbers')
          navigate('/register')
        } else {
          info('Succesfully Logged')
          navigate('/login')
        }
      })

      .catch((err) => console.log(err))
  }
  const info = (e) => {
    message.info(e)
  }
  return (
    <div>
      <form class='form' id='a-form' onSubmit={ourFields}>
        <h2 class='form_title auth-title'>Create Account</h2>
        <div class='form__icons'>
          <img class='form__icon' src='' alt='' />
          <img class='form__icon' src='' />
          <img class='form__icon' src='' />
        </div>
        <span class='form__span'>or use email for registration</span>
        <input
          onChange={handleReg}
          class='form__input'
          type='text'
          name='name'
          placeholder='Name'
        />
        <input
          onChange={handleReg}
          class='form__input'
          type='text'
          name='email'
          placeholder='Email'
        />
        <input
          onChange={handleReg}
          class='form__input'
          type='text'
          name='avatar'
          placeholder='avatar'
        />

        <input
          onChange={handleReg}
          class='form__input'
          type='password'
          name='password'
          placeholder='Password'
        />
        <button class='form__button auth-button submit' type='submit'>
          SIGN UP
        </button>
      </form>
    </div>
  )
}

export default Signup
