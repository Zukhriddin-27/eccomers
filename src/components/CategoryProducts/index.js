import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import './style.css'
import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import Loading from '../Loading'
import {
  addItem,
  decrProduct,
  dellItem,
  icrProduct,
} from '../../redux/action/index'
import { useQuery } from 'react-query'

const Header = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.escuelajs.co/api/v1/products').then((res) => res.json())
  )
  const dispatch = useDispatch()
  const { category } = useParams()
  const navigate = useNavigate()

  const addToCart = (product) => {
    dispatch(addItem(product))
  }

  const onSelect = (id) => {
    navigate(`/products/${id}`)
  }
  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='product-container'>
      <div className='content-title'>{category}</div>
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
            <span>{category}</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className='products-content'>
        {isLoading ? (
          <Loading />
        ) : (
          data
            .filter((x) => x?.category?.name === category)
            .map((items) => {
              return (
                <div className='products-content__items'>
                  {/* eslint-disable-next-line */}
                  <img
                    src={items.images[0]}
                    alt='product.jpg'
                    className='product-image'
                  />
                  <div className='products-content__item'>
                    <p
                      className='product-title'
                      onClick={() => onSelect(items.id)}
                    >
                      {items.title.slice(0, 20)}
                    </p>
                    <p className='product-price'>${items.price}</p>
                  </div>
                  <button
                    className='btn-cart__add'
                    onClick={() => addToCart(items)}
                  >
                    <i class='bx bx-cart-add'></i>
                  </button>
                </div>
              )
            })
        )}
      </div>
    </div>
  )
}

export default Header
