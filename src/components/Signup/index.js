import { message } from 'antd'
import React, { useState } from 'react'
import useRequest from '../../hooks/useRequest'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
const Signup = (props) => {
  const { isHidden, setIsHidden } = props
  const request = useRequest()
  const [body, setBody] = useState({})

  const handleReg = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    request({
      method: 'POST',
      body,
      url: '/api/auth/signup',
    }).then((res) => {
      if (res.errorMessage) {
        error(res.errorMessage)
      } else {
        info(res.successMessage)
        setIsHidden(!isHidden)
      }
    })
  }

  const info = (e) => {
    message.info(e)
  }
  const error = (e) => {
    message.error(e)
  }

  return (
    <div>
      <div className='form' id='a-form'>
        <h2 className='form_title auth-title'>Create Account</h2>
        <div className='form__icons'>
          <img className='form__icon' src='/assets/search.png' alt='' />

          {/* eslint-disable-next-line */}
          <img className='form__icon' src='/assets/facebook.png' />
          {/* eslint-disable-next-line */}
          <img className='form__icon' src='/assets/apple.png' />
        </div>
        <span className='form__span'>or use email for registration</span>
        <input
          onChange={handleReg}
          className='form__input'
          type='text'
          name='username'
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
          type='password'
          name='password'
          placeholder='Password'
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        {/* <input
          onChange={handleReg}
          className='form__input'
          type='password'
          name='password2'
          placeholder='Return password'
        /> */}
        {/* <input
          className='form__input'
          type='file'
          onChange={(e) => setImage(e.target.files[0])}
        /> */}

        <button
          className='form__button auth-button submit'
          onClick={handleSubmit}
        >
          SIGN UP
        </button>
      </div>
    </div>
  )
}

export default Signup
