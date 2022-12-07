import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { Rate, Tabs } from 'antd'

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

const ProductsItem = () => {
  const state = useSelector((state) => state.handleCart)
  // const [data, setData] = useState({})
  // const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const { id } = useParams()
  console.log(id)
  const { search } = useLocation()
  const [cartBtn, setCartBtn] = useState('Add to Cart')
  const [addCount, setAddCount] = useState(false)
  console.log(search)

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) =>
      res.json()
    )
  )

  if (error) return 'An error has occurred: ' + error.message

  const addToCart = (product) => {
    if (cartBtn === 'Add to Cart') {
      dispatch(addItem(product))
      setAddCount(true)
      setCartBtn('Remove from Cart')
    } else {
      dispatch(dellItem(product))
      setAddCount(false)
      setCartBtn('Add to Cart')
    }
  }
  const icrProductItem = (product) => {
    dispatch(icrProduct(product))
  }
  const decrProductItem = (product) => {
    dispatch(decrProduct(product))
  }
  const dellProductItem = (product) => {
    dispatch(dellItem(product))
  }

  return (
    <div className='product-container'>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className='content-title'>{data?.title || 'No name'}</div>
          <div className='content-subTitle'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            ad totam, et alias dolorum harum explicabo, earum saepe est sit
            commodi provident velit!
          </div>
          <div className='location'>
            <Breadcrumb>
              <Breadcrumb.Item href='/home'>
                <HomeOutlined />
              </Breadcrumb.Item>
              <Breadcrumb.Item href='/products'>
                <span>{data?.category?.name || 'No name'}</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item href='/products'>
                <span>{data?.title || 'No name'}</span>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className='products-item-container'>
              <div className='products-item__content'>
                {/* eslint-disable-next-line */}
                {/* <img
                  src={!data?.images[0] || 'No'}
                  alt={data?.title || 'No name'}
                /> */}
              </div>
              <div className='products-item__content'>
                <div className='product-item__title'>
                  {data?.title || 'No name'}
                </div>

                <div className='product-item__price'>${data?.price || 0}</div>
                <div className='delivery'>Fast Delivery in Uzbekistan</div>
                <div className='delivery-item'>
                  <div className='shipping'>Shipping From UZS 34.500</div>
                  <div className='estimated'>
                    Estimated delivery Dec 02-Dec 10
                  </div>
                  <div className='delivery-trans'>
                    Home delivery via - Fargo
                  </div>
                </div>
                <div className='product-item__rating'>
                  <div className='rating-count'>
                    Rating: {data?.rating?.count || 0} items
                  </div>
                  <Rate allowHalf defaultValue={data?.rating?.rate || 0} />
                </div>

                <div className={addCount ? 'product-quantity' : 'show-cart '}>
                  <p>Quantity</p>
                  <div className='product-item__count'>
                    <button onClick={() => decrProductItem(data)}>-</button>
                    {state.map((value) => (
                      <div className='product-item__qty' key={value?.id}>
                        {value?.qty !== true ? value?.qty : '0'}
                      </div>
                    ))}

                    <button onClick={() => icrProductItem(data)}>+</button>
                    <button onClick={() => dellProductItem(data)}>
                      <i className='bx bxs-trash'></i>
                    </button>
                  </div>
                </div>
                <button className='btn' onClick={() => addToCart(data)}>
                  {cartBtn}
                </button>
                <div className='payment-type'>
                  <img src='https://www.zoodmall.com/images/v2/installment_en.png' />
                  <img src='https://www.zoodmall.com/images/v2/cod_en.png' />
                  <img src='https://cdn.paycom.uz/merchants/payme_card-p2p.png' />
                </div>
              </div>
            </div>
            <div className='description'>
              <Tabs
                defaultActiveKey='1'
                items={[
                  {
                    label: `Description`,
                    key: '1',
                    children: `Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.`,
                  },
                  {
                    label: `Specifications`,
                    key: '2',
                    children: `{data.description}`,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductsItem