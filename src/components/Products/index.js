import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './style.css'
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import Loading from '../Loading'
import CartProduct from '../CartProduct'
import ShopFilter from '../ShopFilter'
import { Pagination } from 'antd'
const Header = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { search } = useLocation()

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://fakestoreapi.com/products${search}
    `)
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        setIsLoading(false)
      })
  }, [search])

  return (
    <div className='product-container'>
      <div className='content-title'>Shop</div>
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
            <span>Shop</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className='wrapper'>
        <div className='row'>
          <div className='col-3'>
            <ShopFilter />
          </div>
          <div className='col-9'>
            <div className='products-content'>
              {isLoading ? (
                <Loading />
              ) : (
                data?.map((items) => {
                  return (
                    <>
                      <CartProduct data={items} />
                    </>
                  )
                })
              )}
            </div>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
