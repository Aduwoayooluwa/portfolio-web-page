import { projects } from '@/utils/projects';
import React, { useEffect, useRef} from 'react'
import SwiperCore, { Navigation, Pagination, Keyboard, Mousewheel, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

SwiperCore.use([Keyboard, Mousewheel, Autoplay]);

type Props = {}

const Projects = (props: Props) => {

    return (
            <main  className='h-screen py-10 px-5 bg-[#0E8388] w-full'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={25}
                            slidesPerView={3}
                            mousewheel
                            keyboard={{enabled: true}}
                            direction='horizontal'
                            autoplay={{delay: 2000,
                                disableOnInteraction: false,}}
                                centeredSlides={true}
                            pagination
                            >
                                {
                        projects.map((data: any, index) => {
                            return (
                                <SwiperSlide key={index} className='min-w-[600px] px-20 py-5 bg-white  mx-9 w-[400px] rounded shadow min-h-[500px] max-h-[500px]'>
                                    <div className='shadow w-full  border rounded-xl overflow-hiiden h-2/3'>
                                        <Image height={250} width={700} className='w-full rounded-xl'  src={data.img} alt={data.title} />
                                    </div>
                                    
                                    <p className='w-full font-semibold text-[1.5rem] text-center '>{data.title}</p>
                                    <summary className='my-5 font-medium text-sm'>{data.desc}</summary>

                                    <div className='bg-slate-200 my-3 py-3 flex items-center justify-around w-full'>
                                        <p className='border border-[#2E4F4F] hover:bg-[#2E4F4F] hover:text-slate-100 rounded-md py-2 px-3'><a href={data.code}>Code</a></p>
                                        <p className='border border-[#2E4F4F] hover:bg-[#2E4F4F] hover:text-slate-100 rounded-md py-2 px-3'><a href={data.demo}>Demo</a></p>
                                    </div>

                                    <div className='mx-3 my-3 p-2 flex items-center justify-around'>{
                                        data.stacks.map((item: string, index: number) => {
                                            return (
                                                <p className='border border-[#2E4F4F] hover:bg-[#2E4F4F] hover:text-slate-100 rounded-md py-2 px-3' key={index}>{item}</p>
                                            )
                                        })
                                    }</div>
                                </SwiperSlide>

                            )
                        })
                    }
                    </Swiper>
            </main>
    )
}

export default Projects