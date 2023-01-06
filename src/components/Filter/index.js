import { Divider, Modal } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { uzeReplace } from '../../hooks/useReplace'
import './style.css'
const Filter = ({ isNavbar }) => {
  const [data, setData] = useState([])
  const titleRef = useRef()
  const location = useLocation()
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [filData, setFilData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://fakestoreapi.com/products
    `)
      .then((res) => res.json())
      .then((res) => {
        setData(res)
        setIsLoading(false)
      })
  }, [])
  const handleChange = (e) => {
    const { value } = e.target
    const res = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    )
    setFilData(res)
    setIsModalOpen(true)
    console.log(filData)
  }
  console.log(filData)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleProducts = (id) => {
    navigate(`/products/${id}`)
    setIsModalOpen(false)
  }

  return (
    <div className='search-logo'>
      <i className='bx bx-search-alt-2'></i>
      <input
        placeholder='Search'
        className={isNavbar ? 'search-active search' : ' search'}
        ref={titleRef}
        name='title'
        onChange={handleChange}
      />
      <>
        <Modal
          title='Search'
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          centered={false}
        >
          {filData.map((item) => {
            return (
              <>
                <div key={item?.id || 0}>
                  <div
                    className='cart-content'
                    onClick={() => handleProducts(item.id)}
                  >
                    <div className='cart-content__items'>
                      <img
                        src={item?.image || 0}
                        alt='cart.png'
                        className='cart-image__add'
                      />
                    </div>

                    <div className='cart-content__items'>
                      <p className='cart-content__title'>{item?.title || 0}</p>
                    </div>
                  </div>
                  <Divider />
                </div>
              </>
            )
          })}
        </Modal>
      </>
    </div>
  )
}

export default Filter
