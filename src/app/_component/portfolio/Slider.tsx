'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Navigation } from 'swiper/modules'
import { Scrollbar } from 'swiper/modules'
import SliderItem from './SliderItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)

import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import { useState } from 'react'

const sliderItems = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Title 3',
    description: 'Description 3',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Title 4',
    description: 'Description 4',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Title 5',
    description: 'Description 5',
  },
]
function Slider() {
  const [count, setCount] = useState<number>(0)

  SwiperCore.use([Navigation, Scrollbar])

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={(swiper) => setCount(swiper.activeIndex)}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }}
        scrollbar={{ draggable: true, el: '.swiper-scrollbar' }}
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderItem
              thumb={item.image}
              title={item.title}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-between items-center">
        <div className="w-[100px] relative flex gap-2 justify-between items-center">
          <span className="current-active-slider-number block">{count}</span>
          <div className="swiper-scrollbar relative"></div>
          <span className="total-slider-number block">
            {sliderItems.length}
          </span>
        </div>
        <div className="navigation">
          <button className="prev-button">
            <FontAwesomeIcon icon={['fas', 'arrow-left']} />
          </button>
          <button className="next-button">
            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Slider
