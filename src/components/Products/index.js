import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import './style.css'
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb, Pagination } from 'antd'
import Loading from '../Loading'
import { addItem } from '../../redux/action/index'

const Header = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const { search } = useLocation()
  const navigate = useNavigate()

  const addToCart = (product) => {
    dispatch(addItem(product))
  }

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://api.escuelajs.co/api/v1/products${search}
    `)
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        setIsLoading(false)
      })
  }, [search])
  console.log(data)

  const onSelect = (id) => {
    navigate(`/products/${id}`)
  }
  return (
    <div className='product-container'>
      <div className='content-title'>All Products</div>
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
            <span>All Products</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className='products-content'>
        {isLoading ? (
          <Loading />
        ) : (
          data.map((items) => {
            return (
              <div>
                <div className='products-content__items'>
                  {/* eslint-disable-next-line */}
                  <img src={items.images[1]} alt='product.jpg' />
                  <div className='products-content__item'>
                    <p
                      className='product-title'
                      onClick={() => onSelect(items.id)}
                    >
                      {items.title}
                    </p>
                    <p className='product-price'>${items.price}</p>

                    <button
                      className='btn-cart__add'
                      onClick={() => addToCart(items)}
                    >
                      <i class='bx bx-cart-add'></i>
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
      {/* <Pagination defaultCurrent={1} total={200} />; */}
    </div>
  )
}

export default Header
