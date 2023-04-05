import { projects } from '@/utils/projects';
import React, { useEffect, useRef} from 'react'
import SwiperCore, { Navigation, Pagination, Keyboard, Mousewheel, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Keyboard, Mousewheel]);

type Props = {}

const Projects = (props: Props) => {

    return (
            <main  className='h-[700px] p-20 bg-[#0E8388] w-full'>
                    <Swiper
                        // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={3}
                            mousewheel
                            keyboard={{enabled: true}}
                            direction='horizontal'
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}

                            >
                                {
                        projects.map((data: any, index) => {
                            return (
                                <SwiperSlide key={index} className='min-w-[600px] p-20 bg-red-200  mx-9 w-[400px] h-full'>
                                    <p className='w-full font-semibold text-[1.5rem] text-center '>{data.title}</p>
                                    <summary className='font-medium text-sm'>{data.desc}</summary>
                                    <p className='mx-3 p-2'>{data.stacks}</p>

                                    <div className='flex items-center justify-around w-full'>
                                        <p className='border border-[#2E4F4F] hover:bg-[#2E4F4F] hover:text-slate-100 rounded-md py-2 px-3'><a href={data.code}>Code</a></p>
                                        <p className='border border-[#2E4F4F] hover:bg-[#2E4F4F] hover:text-slate-100 rounded-md py-2 px-3'><a href={data.demo}>Demo</a></p>
                                    </div>
                                </SwiperSlide>

                            )
                        })
                    }
                    </Swiper>
            </main>
    )
}

export default Projects