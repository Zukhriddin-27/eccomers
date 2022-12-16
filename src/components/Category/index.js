import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Navigation } from 'swiper'
import './style.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Divider } from 'antd'

const Category = () => {
  const navigate = useNavigate()
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://fakestoreapi.com/products/categories').then((res) =>
      res.json()
    )
  )
  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message
  const handleLink = (product) => {
    navigate(`/category/${product}`)
  }

  return (
    <div className='content-category'>
      <>
        <Swiper
          slidesPerView={10}
          spaceBetween={10}
          navigation={true}
          freeMode={true}
          modules={[FreeMode, Navigation, Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='slider-content' onClick={() => handleLink(data[0])}>
              {/* eslint-disable-next-line */}
              <img src='https://olcha.uz/image/256x256/category/ZUL8nBr5B3s2XNEX8MYx7lQz52QDpTpOOEf31vUDjN5Zxt0nkHEDuxyNNvuJ.' />
              <div className='category-title'>{data[0]}</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content' onClick={() => handleLink(data[1])}>
              {/* eslint-disable-next-line */}
              <img src='https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg' />
              <div className='category-title'>{data[1]}</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content' onClick={() => handleLink(data[2])}>
              {/*  eslint-disable-next-line */}
              <img src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' />
              <div className='category-title'>{data[2]}</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content' onClick={() => handleLink(data[3])}>
              {/*  eslint-disable-next-line */}
              <img src='https://olcha.uz/image/256x256/category/jTPPyG1D9fziqBW0yJXQd3RpyCUSRd6AbthM5l0CRxLFbJhrlxOmcqI48LMZ.' />
              <div className='category-title'>{data[3]}</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slider-content'>
              {/*  eslint-disable-next-line */}
              <img src='https://olcha.uz/image/256x256/category/9fCLiZeH7QOJDKz24ZZg9h7lNbSMlWNuZKCYZueqB0bGSDpx9AbodQuBhmoa.' />
              <div className='category-title'>Heawey</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              {/*  eslint-disable-next-line */}
              <img src='https://olcha.uz/image/256x256/category/ZUL8nBr5B3s2XNEX8MYx7lQz52QDpTpOOEf31vUDjN5Zxt0nkHEDuxyNNvuJ.' />
              <div className='category-title'>Phone</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              {/*  eslint-disable-next-line */}
              <img src='https://olcha.uz/image/256x256/category/tS7u52PvR1Zaw3xRLQ0h1zBH9sSevOAQt3FdXmyQ4DfUo8cgruPXuvyyAHmO.' />
              <div className='category-title'>Home</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              {/*  eslint-disable-next-line */}
              <img src='https://olcha.uz/image/256x256/category/KhQzj5jBMlUUQGQg3Pz5471WDpUa2nP1sOs2kdLPeuWE1FbdWKb84GLSMpQg.' />
              <div className='category-title'>Samokat</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              {/*  eslint-disable-next-line */}
              <img src='https://olcha.uz/image/256x256/category/BCoCpVZoqpqJzQC4aiRpGVE115PG3XEqtSsF4AfxYn9sruh9BLoqUenR5IAi.' />
              <div className='category-title'>Washes</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              {/*  eslint-disable-next-line */}
              <img src='https://olcha.uz/image/256x256/category/LzTnOeBLuEdD8SZNP60rVzei8wxGzi1UcbaalLAls45FQODwUdmXnzgsBgFR.' />
              <div className='category-title'>Books</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              {/*  eslint-disable-next-line */}
              <img src='https://olcha.uz/image/256x256/category/CKZsoYyBZe0yjbVeweAfqdN37DUoniYtoaP6axHXjmP8mL1sdfHJViYxE9oC.' />
              <div className='category-title'>TV</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
      <Divider />
    </div>
  )
}

export default Category
