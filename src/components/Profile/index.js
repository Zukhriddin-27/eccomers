import { Divider, Empty, Tabs } from 'antd'
import React from 'react'
import CartItem from '../CartItem'

import './style.css'
const cart = JSON.parse(localStorage.getItem('cart'))
const catalog = [
  {
    label: 'Profile',
    key: '1',
    children: (
      <div className='dashboard'>
        <div className='dashboard-items'>
          <div className='dashboard-item'>
            <button className='dashboard-btn'>Personal Information</button>
            <button className='dashboard-btn'>Account Information</button>
            <button className='dashboard-btn'>Password Change</button>
          </div>
          <div className='dashboard-title'>
            <p>Client Personal Information</p>
          </div>
          <div className='dashboard-item'>
            <span>Your Avatar</span>
            <div className='dashboard-profile__info'>
              <div className='dashboard-profile__img'>
                <img src='dddd' alt='user' />
              </div>
              <div className='dashboard-profile'>
                <h4>User</h4>
                <span>example@gmail.com</span>
              </div>
              <button className='dashboard-btn'>Upload Now</button>
            </div>
            <Divider />
            <div className='dashboard-profile__info'>
              <div className='dashboard-input'>
                <span>First Name</span>
                <input type='text' placeholder='First Name' />
              </div>
              <div className='dashboard-input'>
                <span>Last Name</span>
                <input type='text' placeholder='Last Name' />
              </div>
            </div>
          </div>
          <div className='dashboard-title'>
            <p>Contact Informations</p>
          </div>
          <div className='dashboard-item'>
            <div className='dashboard-profile__info'>
              <div className='dashboard-input'>
                <span>Contact Phone</span>
                <input type='text' />
              </div>
              <div className='dashboard-input'>
                <span>E-Mail address</span>
                <input type='email' />
              </div>
            </div>
            <div className='dashboard-profile__info'>
              <div className='dashboard-input'>
                <span>Country</span>
                <input type='text' />
              </div>
              <div className='dashboard-input'>
                <span>City</span>
                <input type='text' />
              </div>
            </div>
            <div className='dashboard-profile__info'>
              <div className='dashboard-input'>
                <span>Street</span>
                <input type='text' />
              </div>
            </div>
            <div className='dashboard-profile'>
              <button className='dashboard-btn'>Update Profile</button>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Order',
    key: '2',
    children: (
      <div className='dashboard'>
        <div className='dashboard-cart'>
          <h2 className='shop-cart__title'>Order</h2>
          {cart?.length ? (
            <>
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
                  {cart.map((value) => {
                    return <CartItem data={value} key={value.id} />
                  })}
                </table>
              </div>
            </>
          ) : (
            <Empty />
          )}
        </div>
      </div>
    ),
  },
]
const Profile = () => {
  return (
    <div className='profile'>
      <Tabs tabPosition={'left'} items={catalog} />
    </div>
  )
}

export default Profile
