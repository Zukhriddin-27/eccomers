import { message } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

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
      <form className='form' id='a-form' onSubmit={ourFields}>
        <h2 className='form_title auth-title'>Create Account</h2>
        <div className='form__icons'>
          <img className='form__icon' src='' alt='' />
          {/* eslint-disable-next-line */}
          <img className='form__icon' src='' />
          {/* eslint-disable-next-line */}
          <img className='form__icon' src='' />
        </div>
        <span className='form__span'>or use email for registration</span>
        <input
          onChange={handleReg}
          className='form__input'
          type='text'
          name='name'
          placeholder='Name'
        />
        <input
          onChange={handleReg}
          className='form__input'
          type='text'
          name='email'
          placeholder='Email'
        />
        <input
          onChange={handleReg}
          className='form__input'
          type='text'
          name='avatar'
          placeholder='avatar'
        />

        <input
          onChange={handleReg}
          className='form__input'
          type='password'
          name='password'
          placeholder='Password'
        />
        <button className='form__button auth-button submit' type='submit'>
          SIGN UP
        </button>
      </form>
    </div>
  )
}

export default Signup
