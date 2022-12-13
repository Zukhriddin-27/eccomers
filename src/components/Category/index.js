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

const Category = () => {
  const navigate = useNavigate()
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.escuelajs.co/api/v1/categories').then((res) =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  console.log(data)
  const handleLink = (product) => {
    navigate(`/categories/${product}`)
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
          {data?.map((value) => {
            return (
              <SwiperSlide>
                <div
                  className='slider-content'
                  onClick={() => handleLink(value?.id)}
                >
                  <img src={value?.image} />
                  <div className='category-title'>{value?.name}</div>
                </div>
              </SwiperSlide>
            )
          })}
          <SwiperSlide>
            <div className='slider-content'>
              <img src='https://olcha.uz/image/256x256/category/QABgOzSh1WTWkoFrE0KbcjWEucVaAwQBJgQjklPAtXaKwjp0v9ZYkF34uVPv.' />
              <div className='category-title'>Chair</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              <img src='https://olcha.uz/image/256x256/category/ANjR66Mftj98kEBx8CWVVnQLdFQuJ4pSr3QKP4n9msN9OAwp25zPtdDyLxi5.' />
              <div className='category-title'>Notebooks</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              <img src='https://olcha.uz/image/256x256/category/N3iMWPyvXRIXTqwloVhRb4oe2PEn38unPptNWZVenY7DJS2GYY5py94DRAX6.' />
              <div className='category-title'>Car details</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              <img src='https://olcha.uz/image/256x256/category/tS7u52PvR1Zaw3xRLQ0h1zBH9sSevOAQt3FdXmyQ4DfUo8cgruPXuvyyAHmO.' />
              <div className='category-title'>Home</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              <img src='https://olcha.uz/image/256x256/category/jTPPyG1D9fziqBW0yJXQd3RpyCUSRd6AbthM5l0CRxLFbJhrlxOmcqI48LMZ.' />
              <div className='category-title'>Clothes</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slider-content'>
              <img src='https://olcha.uz/image/256x256/category/9fCLiZeH7QOJDKz24ZZg9h7lNbSMlWNuZKCYZueqB0bGSDpx9AbodQuBhmoa.' />
              <div className='category-title'>Heawey</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              <img src='https://olcha.uz/image/256x256/category/ZUL8nBr5B3s2XNEX8MYx7lQz52QDpTpOOEf31vUDjN5Zxt0nkHEDuxyNNvuJ.' />
              <div className='category-title'>Phone</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              <img src='https://olcha.uz/image/256x256/category/tS7u52PvR1Zaw3xRLQ0h1zBH9sSevOAQt3FdXmyQ4DfUo8cgruPXuvyyAHmO.' />
              <div className='category-title'>Home</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              <img src='https://olcha.uz/image/256x256/category/KhQzj5jBMlUUQGQg3Pz5471WDpUa2nP1sOs2kdLPeuWE1FbdWKb84GLSMpQg.' />
              <div className='category-title'>Samokat</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              <img src='https://olcha.uz/image/256x256/category/BCoCpVZoqpqJzQC4aiRpGVE115PG3XEqtSsF4AfxYn9sruh9BLoqUenR5IAi.' />
              <div className='category-title'>Washes</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              <img src='https://olcha.uz/image/256x256/category/LzTnOeBLuEdD8SZNP60rVzei8wxGzi1UcbaalLAls45FQODwUdmXnzgsBgFR.' />
              <div className='category-title'>Books</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider-content'>
              <img src='https://olcha.uz/image/256x256/category/CKZsoYyBZe0yjbVeweAfqdN37DUoniYtoaP6axHXjmP8mL1sdfHJViYxE9oC.' />
              <div className='category-title'>TV</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  )
}

export default Category
