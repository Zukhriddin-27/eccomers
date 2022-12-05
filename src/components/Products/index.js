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

const Header = () => {
  const state = useSelector((state) => state.handleCart)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  // const { id } = useParams()
  const navigate = useNavigate()
  const [cartBtn, setCartBtn] = useState('Buy')

  const addToCart = (product) => {
    dispatch(addItem(product))
  }

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        setIsLoading(false)
      })
  }, [])
  console.log(data)

  const onSelect = (id) => {
    navigate(`products/${id}`)
    console.log(id)
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
              <div className='products-content__items'>
                {/* eslint-disable-next-line */}
                <img
                  src={items.image}
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

                  <button className='btn-cart' onClick={() => addToCart(items)}>
                    <i class='bx bx-cart-add'></i>
                  </button>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Header
