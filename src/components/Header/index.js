import React from 'react'
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Col, Statistic } from 'antd'

import './style.css'
import 'swiper/css'
import 'swiper/css/navigation'

const { Countdown } = Statistic
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 // Dayjs is also OK

const Header = () => {
  const onChange = (val) => {
    if (4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!')
    }
  }
  return (
    <div className='head-content'>
      <div className='head-content__items'>
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          keyboard={true}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
          className='mySwiper'
        >
          <SwiperSlide>
            {/* eslint-disable-next-line */}
            <img src='https://olcha.uz/image/original/sliders/oz/25j0NV3Fk5e1cRf9TsSvwmenYChcHKfpmEYsdCCNzQP8WIREbpuzWH7HwwEb.' />{' '}
          </SwiperSlide>
          <SwiperSlide>
            {/* eslint-disable-next-line */}
            <img src='https://olcha.uz/image/original/sliders/oz/N8KJP5ASm6Xl9R32pIDgIWsJyhTkki8jW406G0EENzWos9HfPJFEIY92JYoG.' />
          </SwiperSlide>
          <SwiperSlide>
            {/* eslint-disable-next-line */}
            <img src='https://olcha.uz/image/original/sliders/oz/iR1rhv7MghF8F9AtsApdMHZbSfTzXL6VwY3lzUPMstt5wmek5ncgfFvBOIbE.' />
          </SwiperSlide>
          <SwiperSlide>
            {/* eslint-disable-next-line */}
            <img src='https://olcha.uz/image/original/sliders/oz/jp3iHZasv5L5k6XF6Gm6QqFOtQTHIPCeS5JZ9rvVCQa44mFETAQMODqt09EN.' />
          </SwiperSlide>
          <SwiperSlide>
            {/* eslint-disable-next-line */}
            <img src='https://olcha.uz/image/original/sliders/oz/msSynGqDtALEpUvsuUGi3O83kd9m8uzZDvfWYOhZHOOMW1yaHFtOKH53GEaQ.' />
          </SwiperSlide>
          <SwiperSlide>
            {/* eslint-disable-next-line */}
            <img src='https://olcha.uz/image/original/sliders/oz/3PBAAYdoPxWhIbbHeTew3bFuJq2nCXT9l4NW8jtZ10StfXKQzdoNhIqV8eIG.' />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='head-content__items'>
        <div className='head-content__item'>
          <h3>Kun maxsuloti</h3>
          <Col span={10}>
            <Countdown value={deadline} onChange={onChange} />
          </Col>
        </div>
        <Swiper
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Mousewheel, Keyboard]}
          className='mySwiper'
        >
          <SwiperSlide>
            {/* eslint-disable-next-line */}
            <img src='https://olcha.uz/image/220x220/products/B4Z0z4sfcgAYbH5i3Qe01UrCVeqp8Hgn5eiddgKwmz4Ic9bXCoJpAETw6Ke4.' />
            <div className='title'>Go‘sht maydalagich Tefal NE688837</div>
            <div className='head-content__item'>
              <div className='price'>$234.000</div>
              <div className='price-moonth'>$16 x 12 moonth</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* eslint-disable-next-line */}
            <img src='https://olcha.uz/image/220x220/products/B4Z0z4sfcgAYbH5i3Qe01UrCVeqp8Hgn5eiddgKwmz4Ic9bXCoJpAETw6Ke4.' />
            <div className='title'>Go‘sht maydalagich Tefal NE688837</div>
            <div className='head-content__item'>
              <div className='price'>$340.000</div>
              <div className='price-moonth'>$16 x 12 moonth</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* eslint-disable-next-line */}
            <img src='https://olcha.uz/image/220x220/products/B4Z0z4sfcgAYbH5i3Qe01UrCVeqp8Hgn5eiddgKwmz4Ic9bXCoJpAETw6Ke4.' />
            <div className='title'>Go‘sht maydalagich Tefal NE688837</div>
            <div className='head-content__item'>
              <div className='price'>$120.000</div>
              <div className='price-moonth'>$16 x 12 moonth</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Header
