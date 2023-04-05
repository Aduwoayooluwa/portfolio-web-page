import React from 'react'
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Keyboard, Mousewheel, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Keyboard, Mousewheel]);
type Props = {}

const Stacks = (props: Props) => {
    return (
        <div>
            <Swiper
      // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        mousewheel
        keyboard={{enabled: true}}
        direction='horizontal'
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}

        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
    </Swiper>
        </div>
    )
}

export default Stacks