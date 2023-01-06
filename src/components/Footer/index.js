import { Divider } from 'antd'
import ScrollToTop from 'react-scroll-to-top'
import React from 'react'
import './style.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <h2>BIZNING MOBIL ILOVAMIZ APPGALLERY, APP STORE VA GOOGLE PLAY-DA</h2>
        <div className='footer-social__items'>
          <div className='footer-social__item'>
            <img
              src='https://olcha.uz/_nuxt/appstore.32a5f67a.svg'
              alt='apple logo'
            />
            <img
              src='https://olcha.uz/_nuxt/googleplay.4ba35be8.svg'
              alt='googleplay'
            />
            <img
              src='https://olcha.uz/_nuxt/app-gallery.879faacf.svg'
              alt='app-gallery'
            />
          </div>
          <div className='footer-social__item'>
            {/* eslint-disable-next-line */}
            <img
              src='https://olcha.uz/_nuxt/footer-img.745872f8.webp'
              alt='image'
            />
          </div>
        </div>
        <Divider />
        <div className='footer-social__items'>
          <div className='footer-link'>
            <div className='footer-brand'>Rolex</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, et? <b>+998900000000</b>
            </p>
            <div className='footer-link__item'>
              <i className='bx bx-current-location'></i>
              <p>Uzbekiston, Tashkent</p>
            </div>
            <div className='footer-link__item'>
              <i className='bx bxs-envelope'></i>
              <p>Uzbekiston, Tashkent</p>
            </div>
          </div>
          <div className='footer-link'>
            <h3>Home</h3>
            <h3>All Products</h3>
            <h3>Help </h3>
            <h3>Contact us</h3>
            <h3>Term payment</h3>
            <h3>Delivery</h3>
          </div>
          <div className='footer-link'>
            <h3>Home</h3>
            <h3>All Products</h3>
            <h3>Help </h3>
            <h3>Contact us</h3>
            <h3>Term payment</h3>
            <h3>Delivery</h3>
          </div>
          <div className='footer-payment'>
            <div className='footer-payment__items'>
              {/*  eslint-disable-next-line */}
              <img
                src='https://logobank.uz:8005/media/logos_png/payme-01.png'
                alt='s'
              />
              {/*  eslint-disable-next-line */}
              <img
                src='https://logobank.uz:8005/media/logos_png/click-01.png'
                alt='s'
              />
              {/*  eslint-disable-next-line */}
              <img
                src='https://logobank.uz:8005/media/logos_png/Uzcard-01.png'
                alt='s'
              />
            </div>
            <div className='footer-payment__items'>
              {/*  eslint-disable-next-line */}
              <img
                src='https://logobank.uz:8005/media/logos_png/Apelsin-01.png'
                alt='s'
              />
              {/*  eslint-disable-next-line */}
              <img
                src='https://logobank.uz:8005/media/logos_png/Humo-01.jpg'
                alt='s'
              />
              {/*  eslint-disable-next-line */}
              <img
                src='https://logobank.uz:8005/media/logos_png/payme-01.png'
                alt='s'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='footer-container__items'>
        <p>© 2020-2022. ООО "Rolex store"</p>
      </div>

      <ScrollToTop
        style={{
          background: '#ffb32f',
          color: '#000',
        }}
        smooth
      />
    </div>
  )
}

export default Footer
