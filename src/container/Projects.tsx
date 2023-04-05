import { projects } from '@/utils/projects';
import React, { useEffect, useRef} from 'react'

type Props = {}

const Projects = (props: Props) => {
    const elRef = useRef(null);

    useEffect(() => {
        const el: any = elRef.current;
        if (el) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY === 0) {
                    return;
                }
                if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                    e.preventDefault();
                    el.scrollLeft += e.deltaX;
                    
                }
                el.scrollTo({ left: el.scrollLeft + e.deltaY })
            };
            el.addEventListener('wheel', onWheel);
            return () => el.removeEventListener('wheel', onWheel);
        }
    }, []);
    for (let i=0; i<2; i++) {

    }
    return (
        <>
            <main  className='h-screen p-20 grid place-items-center  bg-[#0E8388] w-full'>
                <div ref={elRef} id='project' className='flex items-center  overflow-x-scroll h-full bg-white overflow w-full'>
                    {
                        projects.map((data: any, index) => {
                            return (
                                <div key={index} className='min-w-[400px] bg-red-200  mx-9 w-[400px] h-full'>
                                    <p className='w-full font-semibold text-[1.5rem] text-center '>{data.title}</p>
                                    <summary className='font-medium text-sm'>{data.desc}</summary>
                                    <p className='mx-3 p-2'>{data.stacks}</p>

                                    <div className='flex items-center justify-around w-full'>
                                        <p className='border border-[#2E4F4F] hover:bg-[#2E4F4F] hover:text-slate-100 rounded-md py-2 px-3'><a href={data.code}>Code</a></p>
                                        <p className='border border-[#2E4F4F] hover:bg-[#2E4F4F] hover:text-slate-100 rounded-md py-2 px-3'><a href={data.demo}>Demo</a></p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}

export default Projects