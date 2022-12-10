import { message } from 'antd'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
const Auth = () => {
  const [isHidden, setIsHidden] = useState(true)
  const [body, setBody] = useState({})
  const navigate = useNavigate()
  const [regName, setRegName] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [regAvatar, setRegAvatar] = useState('')
  const [logEmail, setLogEmail] = useState('')
  const [logPassword, setLogPassword] = useState('')
  const [url, setUrl] = useState(
    'https://res.cloudinary.com/dus2bqcc6/image/upload/v1659189677/photo_2022-07-30_19.01.08_qtdu0q.jpg'
  )

  const handleChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    })
  }
  // const handleSign = ({ target: { value, name } }) => {
  //   setBody({
  //     ...body,
  //     [name]: value,
  //   })
  // }
  const info = () => {
    message.info('Succesfully Logged')
  }
  console.log(body)
  // const onSubmit =  () => {
  //   try {
  //     fetch(`https://api.escuelajs.co/api/v1/users`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application-json',
  //       },
  //       body: JSON.stringify(body),
  //     }).then((res) => {
  //       console.log(res)
  //       info()
  //       navigate('/home')
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const ourFields = () => {
    // eslint-disable-next-line
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(regEmail)) {
      info()
      return
    }
    fetch('https://api.escuelajs.co/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: regName,
        email: regEmail,
        password: regPassword,
        avatar: url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          info()
        } else {
          info()
          setIsHidden(!isHidden)
        }
      })
      .catch((err) => console.log(err))
  }

  const logData = () => {
    // eslint-disable-next-line
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(logEmail)) {
      info()
      return
    }
    fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: logEmail,
        password: logPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          info()
        } else {
          localStorage.setItem('rolex', data.token)
          localStorage.setItem('user', JSON.stringify(data.user))
          info()
          navigate('/home')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className='auth'>
      <div class='main'>
        <div
          class={
            isHidden
              ? 'auth-container a-container '
              : 'auth-container a-container is-txl'
          }
          id='a-container'
        >
          <form class='form' id='a-form'>
            <h2 class='form_title auth-title'>Create Account</h2>
            <div class='form__icons'>
              <img class='form__icon' src='' alt='' />
              <img class='form__icon' src='' />
              <img class='form__icon' src='' />
            </div>
            <span class='form__span'>or use email for registration</span>
            <input
              class='form__input'
              type='text'
              name='name'
              placeholder='Name'
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
            />
            <input
              class='form__input'
              type='text'
              name='email'
              placeholder='Email'
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
            />
            <input
              class='form__input'
              type='text'
              name='avatar'
              value={regAvatar}
              onChange={(e) => setRegAvatar(e.target.value)}
              placeholder='avatar'
            />

            <input
              class='form__input'
              type='password'
              name='password'
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              placeholder='Password'
            />
            <button
              type='submit'
              class='form__button auth-button submit'
              onClick={() => ourFields()}
            >
              SIGN UP
            </button>
          </form>
        </div>
        <div
          class={
            isHidden
              ? 'auth-container b-container  is-z200'
              : 'auth-container b-container is-txl '
          }
          id='b-container'
        >
          <form class='form' id='b-form' method='' action=''>
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
              value={logEmail}
              onChange={(e) => setLogEmail(e.target.value)}
            />

            <input
              class='form__input'
              type='password'
              value={logPassword}
              onChange={(e) => setLogPassword(e.target.value)}
              name='password'
              placeholder='Password'
            />
            <a class='form__link'>Forgot your password?</a>
            <button
              class='form__button auth-button submit'
              type='submit'
              onClick={() => logData()}
            >
              SIGN IN
            </button>
          </form>
        </div>
        <div class={isHidden ? 'switch   ' : 'switch is-txr'} id='switch-cnt'>
          <div class='switch__circle'></div>
          <div class='switch__circle switch__circle--t'></div>
          <div
            class={isHidden ? 'is-hidden' : 'switch__container '}
            id='switch-c1'
          >
            <h2 class='switch__title auth-title'>Welcome Back !</h2>
            <p class='switch__description description'>
              To keep connected with us please login with your personal info
            </p>
            <button
              class='switch__button auth-button switch-btn'
              onClick={() => setIsHidden(true)}
            >
              SIGN IN
            </button>
          </div>
          <div
            class={isHidden ? 'switch__container ' : ' is-hidden'}
            id='switch-c2'
          >
            <h2 class='switch__title auth-title'>Hello Friend !</h2>
            <p class='switch__description description'>
              Enter your personal details and start journey with us
            </p>
            <button
              class='switch__button auth-button switch-btn'
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
