import React from 'react'
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Keyboard, Mousewheel, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";

import { stacks } from '@/utils/stacks';
import Image from 'next/image';

SwiperCore.use([Keyboard, Mousewheel, Autoplay]);
type Props = {}

const Stacks = (props: Props) => {
    return (
        <div className='py-10 px-5 z-10 bg-[#2D2727] justify-center'>
            <Swiper
      // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        mousewheel
        keyboard={{enabled: true}}
        direction='horizontal'
        autoplay={{delay: 2000,
            disableOnInteraction: false,}}
            centeredSlides={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}

        >
            {
                stacks.map((images, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Image className='bg-white' src={images.img} alt={'images'} width={200} height={160}/>
                        </SwiperSlide>
                    )
                })
            }
    
    </Swiper>
        </div>
    )
}

export default Stacks