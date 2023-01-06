import './style.css'
import { UserOutlined } from '@ant-design/icons'
// import useLocalStroge from 'use-local-storage'
import { useNavigate } from 'react-router-dom'
import { Avatar, Divider, Popover } from 'antd'
const User = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user.pic)
  const logOut = () => {
    localStorage.clear()
    navigate('/register')
    setTimeout(() => {
      window.location.reload()
    }, 50)
  }
  const content = (
    <div>
      <p>{user?.email}</p>
    </div>
  )
  return (
    <div>
      <div className='content-home__link'>
        <div className='user-info'>
          <div className='user-img'>
            {user?.pic ? (
              <img src={user?.pic} alt={user?.username} />
            ) : (
              <Avatar size={64} icon={<UserOutlined />} />
            )}
          </div>
          <div className='user-title'>
            <h3>{user ? user?.username : 'User'}</h3>
            {user ? (
              <Popover content={content} zIndex={99999}>
                <p type='primary'>{user?.email.slice(0, 22)}...</p>
              </Popover>
            ) : (
              'example@gmail.com'
            )}
          </div>
        </div>
        <Divider />
        <div className='content-home__items'>
          <ul>
            <li onClick={() => navigate('/profile')}>My account</li>
            <li>My Wishlist</li>
            <li onClick={() => navigate('/cart')}>My Cart</li>
            <li>My checkout</li>
            <li onClick={() => logOut()}>Log out</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default User
