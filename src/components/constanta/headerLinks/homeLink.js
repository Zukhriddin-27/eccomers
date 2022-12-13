import { Divider } from 'antd'
import './style.css'
const menu = (
  <div className='content-home__link'>
    <h2 className='title'>Select language</h2>
    <div className='content-home__language'>
      <img src='https://jthemes.net/themes/f-html/logancee/assets/img/common/flags/flag-1.png' />
      <img src='https://jthemes.net/themes/f-html/logancee/assets/img/common/flags/flag-2.png' />
      <img src='https://jthemes.net/themes/f-html/logancee/assets/img/common/flags/flag-3.png' />
    </div>
    <Divider />
    <h2 className='title'>Select currency</h2>
    <div className='content-home__language'>
      <div className='sub-list'>
        <i class='bx bx-dollar'></i>
        <i class='bx bx-euro'></i>
        <i class='bx bx-ruble'></i>
      </div>
    </div>
    <Divider />
    <div className='content-home__items'>
      <ul>
        <li>
          <a href='/register'>sign in/sign up</a>
        </li>
        <li>
          <a href='#'>My account</a>
        </li>
        <li>
          <a href='#'>My Wishlist</a>
        </li>{' '}
        <li>
          <a href='#'>My Cart</a>
        </li>{' '}
        <li>
          <a href='#'>My checkout</a>
        </li>{' '}
      </ul>
    </div>
  </div>
)

export default menu
