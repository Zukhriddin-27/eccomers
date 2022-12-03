import React from 'react'
import './style.css'
const Header = () => {
  return (
    <div className='container'>
      <div className='head-content'>
        <div className='head-content-items'>
          <h1>new watch collectins b720</h1>
          <p>
            Latest arrival of the new imported watches of the B720 series, with
            a modern and resistant design.
          </p>
          <h6 className='price'>1234$</h6>
          <div className='header-btn'>
            <div className='btn-light'>Discover</div>
            <div className='btn'>Add to cart</div>
          </div>
        </div>
        <div className='head-content-items'>
          <img src='./assets/home.png' alt='home.png' className='head-img' />
        </div>
      </div>
    </div>
  )
}

export default Header
