import React from 'react'
import './style.css'
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb, Empty } from 'antd'

import CartProduct from '../CartProduct'
import { useSelector } from 'react-redux'
import ShopFilter from '../ShopFilter'

const Header = () => {
  const { favourite } = useSelector((state) => state.favourite)
  console.log(favourite)

  return (
    <div className='product-container'>
      <div className='content-title'>Favourite</div>
      <div className='content-subTitle'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ad
        totam, et alias dolorum harum explicabo, earum saepe est sit commodi
        provident velit!
      </div>
      <div className='location'>
        <Breadcrumb>
          <Breadcrumb.Item href='/home'>
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href='/products'>
            <span>Favourite</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className='wrapper'>
        <div className='row'>
          <div className='col-3'>
            <ShopFilter />
          </div>
          <div className='col-9'>
            {favourite?.length !== 0 ? (
              <div className='products-content'>
                {favourite.map((items) => {
                  return <CartProduct data={items} />
                })}
              </div>
            ) : (
              <Empty />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
