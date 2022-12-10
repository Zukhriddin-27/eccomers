import React from 'react'
import './style.css'
const CategoryItems = () => {
  return (
    <div className='category-container'>
      <div className='container'>
        <div className='category-content'>
          <h1 className='category-content__title'>Apple Products</h1>
          <div className='all-products'>
            <p>Barchasini ko'rish</p>
            <i class='bx bx-chevron-right'></i>
          </div>
        </div>
        <div className='category-content__items'>
          <div className='category-content__item'>
            <div className='category-card'>
              <div className='category-card__image'>
                <img
                  src='https://olcha.uz/image/220x220/products/OFLhO6OVhfJouvlaoWm6d0qp0Mbr8V0CKkbj04dWsVnIfqcKtdJ8ACRGPxQO.'
                  alt='apple.jpeg'
                />
                <i class='bx bx-heart heart'></i>
              </div>
              <h3>Apple iPad mini 6 Wi-Fi (2021) 256 GB Starlight</h3>
              <p className='price-product'>$800.000</p>
              <p className='price-product__moonth'>$100 x 12 moonth</p>
              <div className='cart-button'>
                <i class='bx bxs-cart-add'></i>
                <button className='cart-btn'>Muddatli to'lov</button>
              </div>
            </div>
            <div className='category-card'>
              <div className='category-card__column'>
                <div className='category-card__image'>
                  <img
                    src='https://olcha.uz/image/220x220/products/7auI1gNuna59uO9BHlEKrpeE331EagMB8DxHIseJpynkrfcFLU03dlvEked0.jpeg'
                    alt='apple.jpeg'
                  />
                </div>
                <div className='category-info'>
                  <h3>Apple iPad mini 6 Wi-Fi (2021) 256 GB Starlight</h3>
                  <p className='price-product'>$800.000</p>
                  <p className='price-product__moonth'>$100 x 12 moonth</p>
                </div>
              </div>
            </div>
          </div>

          <div className='category-content__item'>
            <div className='app-category__items'>
              <div className='app-category__item'>
                <iframe
                  width='494px'
                  height='276px'
                  src='https://youtube.com/embed/jwmS1gc9S5A'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <div className='app-category__item'>
                <div className='category-card__image'>
                  <img src='https://olcha.uz/image/220x220/products/DrRxYRzDNTYB34W68lZElrHkYpHDlEdP0CZMq0f9JA16rMceE2xNJG8ziYq1.' />
                  <i class='bx bx-heart heart '></i>
                </div>
                <div>
                  <h3>Apple Watch Series 8 45mm Silver</h3>
                  <p className='price-product'>$800.000</p>
                  <p className='price-product__moonth'>$100 x 12 moonth</p>
                  <div className='cart-button'>
                    <i class='bx bxs-cart-add'></i>
                    <button className='cart-btn'>Muddatli to'lov</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='category-content__item'>
              <div className='app-category__items'>
                <div className='category-card'>
                  <div className='category-card__image'>
                    <img
                      src='https://olcha.uz/image/220x220/products/OFLhO6OVhfJouvlaoWm6d0qp0Mbr8V0CKkbj04dWsVnIfqcKtdJ8ACRGPxQO.'
                      alt='apple.jpeg'
                    />
                    <i class='bx bx-heart heart'></i>
                  </div>
                  <h3>Apple iPad mini 6 Wi-Fi (2021) 256 GB Starlight</h3>
                  <p className='price-product'>$800.000</p>
                  <p className='price-product__moonth'>$100 x 12 moonth</p>
                  <div className='cart-button'>
                    <i class='bx bxs-cart-add'></i>
                    <button className='cart-btn'>Muddatli to'lov</button>
                  </div>
                </div>
                <div className='category-card'>
                  <div className='category-card__image'>
                    <img
                      src='https://olcha.uz/image/220x220/products/OFLhO6OVhfJouvlaoWm6d0qp0Mbr8V0CKkbj04dWsVnIfqcKtdJ8ACRGPxQO.'
                      alt='apple.jpeg'
                    />
                    <i class='bx bx-heart heart'></i>
                  </div>
                  <h3>Apple iPad mini 6 Wi-Fi (2021) 256 GB Starlight</h3>
                  <p className='price-product'>$800.000</p>
                  <p className='price-product__moonth'>$100 x 12 moonth</p>
                  <div className='cart-button'>
                    <i class='bx bxs-cart-add'></i>
                    <button className='cart-btn'>Muddatli to'lov</button>
                  </div>
                </div>
                <div className='category-card'>
                  <div className='category-card__image'>
                    <img
                      src='https://olcha.uz/image/220x220/products/OFLhO6OVhfJouvlaoWm6d0qp0Mbr8V0CKkbj04dWsVnIfqcKtdJ8ACRGPxQO.'
                      alt='apple.jpeg'
                    />
                    <i class='bx bx-heart heart'></i>
                  </div>
                  <h3>Apple iPad mini 6 Wi-Fi (2021) 256 GB Starlight</h3>
                  <p className='price-product'>$800.000</p>
                  <p className='price-product__moonth'>$100 x 12 moonth</p>
                  <div className='cart-button'>
                    <i class='bx bxs-cart-add'></i>
                    <button className='cart-btn'>Muddatli to'lov</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryItems
