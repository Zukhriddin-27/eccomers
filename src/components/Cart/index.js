import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Breadcrumb, Divider, Input, Select } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import './style.css'

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters']
const Cart = () => {
  const state = useSelector((state) => state.handleCart)
  console.log(state)
  const [selectedItems, setSelectedItems] = useState([])

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o))
  return (
    <div>
      <div className='shop-cart__container'>
        <h1>Shopping cart</h1>
        <div className='breadcrumb'>
          <Breadcrumb>
            <Breadcrumb.Item href='/home'>
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href='/products'>
              <span>Shopping Cart</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className='container'>
        <h2 className='shop-cart__title'>Your cart items</h2>
        <div className='shop-cart__table'>
          <table>
            <tr>
              <th></th>
              <th>product name</th>
              <th>price</th>
              <th>quantity</th>
              <th>total</th>
              <th></th>
            </tr>

            {state.map((value) => {
              return (
                <tr>
                  <td>
                    <img
                      src={value.image}
                      alt='image.jpeg'
                      className='shop-cart__image'
                    />{' '}
                  </td>
                  <td>{value.title}</td>
                  <td>${value.price}</td>
                  <td>{value.qty}</td>
                  <td>${value.price * value.qty}</td>
                  <td>
                    <div className='shop-edit'>
                      <i class='bx bx-x'></i>
                      <i class='bx bx-pencil'></i>
                    </div>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
        <div className='shop-cart__buttons'>
          <div>
            <button className='shop-clear'>clear shopping cart</button>
            <button className='shop-cart'>update shopping cart</button>
          </div>
          <button>continue shopping</button>
        </div>
        <div className='cart-form'>
          <div className='shop-cart__input'>
            <div className='shop-input__item'>
              <h1>Calculate shipping </h1>
              <Divider />
              <Select
                placeholder='Inserted are removed'
                value={selectedItems}
                onChange={setSelectedItems}
                style={{ width: '100%', height: '50px' }}
                options={filteredOptions.map((item) => ({
                  value: item,
                  label: item,
                }))}
              />

              <input placeholder='State/Country' />
              <input placeholder='Postcode/Zip' />
              <button placeholder='Basic usage'>get a quote</button>
            </div>
            <div className='shop-input__item'>
              <h1>cupon discount </h1>
              <Divider />
              <p>
                <i>Enter your coupon code if you have one. </i>
              </p>
              <input placeholder='Basic usage' />

              <button placeholder='Basic usage'>get a quote</button>
            </div>
          </div>
          <div className='shop-total'>
            <h4>sub total: $220.10</h4>
            <h2>
              Grand total: <span>$220.10</span>{' '}
            </h2>
            <Divider />
            <button>Proceed to checkout </button>
            <p>Checkout with Mutilple Adresses</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
