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
            <main id="projects"  className='h-fit md:h-screen py-10 px-5 bg-[#0E8388] w-full'>
                    <div className='hidden h-full md:flex'>
    <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={25}
                                slidesPerView={3}
                                mousewheel
                                keyboard={{enabled: true}}
                                direction='horizontal'
                                pagination
                                >
                                    {
                            projects.map((data: any, index) => {
                                return (
                                    <SwiperSlide key={index} className='min-w-[600px] px-20 py-5 bg-white  mx-9 w-[400px] rounded shadow min-h-[600px] max-h-[600px]'>
                                        <div className='shadow w-full  border rounded-xl overflow-hiiden h-fit'>
                                            <Image height={250} width={700} className='w-full rounded-xl'  src={data.img} alt={data.title} />
                                        </div>
                                        
                                        <p className='w-full font-semibold text-[1.5rem] text-center '>{data.title}</p>
                                        <summary className='list-none my-5 font-medium text-sm'>{data.desc}</summary>

                                        <div className='bg-slate-200 my-3 py-3 flex items-center justify-around w-full'>
                                            <p className='border border-[#2E4F4F] hover:bg-[#2E4F4F] hover:text-slate-100 rounded-md py-2 px-3'><a href={data.code}>Code</a></p>
                                            <p className='border border-[#2E4F4F] hover:bg-[#2E4F4F] hover:text-slate-100 rounded-md py-2 px-3'><a href={data.demo}>Demo</a></p>
                                        </div>

                                        <div className='mx-3 my-3 p-2 grid grid-cols-3 gap-4'>{
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
                    </div>
                    


                    <div className='flex md:hidden'>

                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={25}
                            slidesPerView={1}
                            mousewheel
                            keyboard={{enabled: true}}
                            direction='horizontal'
                            pagination
                            >
                                {
                        projects.map((data: any, index) => {
                            return (
                                <SwiperSlide key={index} className='w-full px-20 py-5 bg-white  mx-9 rounded shadow min-h-[500px] max-h-[500px]'>
                                    <div className='shadow w-full  border rounded-xl overflow-hiiden'>
                                        <Image height={450} width={700} className='w-full rounded-xl'  src={data.img} alt={data.title} />
                                    </div>
                                    
                                    <p className='w-full font-semibold text-[1.5rem] text-center '>{data.title}</p>
                                    <summary className='list-none my-5 font-medium text-sm'>{data.desc}</summary>

                                    <div className='bg-slate-200 my-3 py-3 flex items-center justify-around w-full'>
                                        <p className='border border-[#2E4F4F] hover:bg-[#2E4F4F] hover:text-slate-100 rounded-md text-sm md:text-lg py-2 px-3'><a href={data.code}>Code</a></p>
                                        <p className='border border-[#2E4F4F] hover:bg-[#2E4F4F] hover:text-slate-100 rounded-md py-2 px-3'><a href={data.demo}>Demo</a></p>
                                    </div>

                                    <div className='mx-3 my-3 p-2 w-full grid grid-cols-2 gap-4'>{
                                        data.stacks.map((item: string, index: number) => {
                                            return (
                                                <p className='border text-xs md:text-sm border-[#2E4F4F] hover:bg-[#2E4F4F] hover:text-slate-100 rounded-md w-[100px] py-2 px-3' key={index}>{item}</p>
                                            )
                                        })
                                    }</div>
                                </SwiperSlide>

                            )
                        })
                    }
                    </Swiper>
                    </div>
            </main>
    )
}

export default Projects