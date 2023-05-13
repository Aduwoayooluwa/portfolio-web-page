import { projects } from '@/utils/projects'
import React from 'react'
import { BsArrowUpRightCircle } from 'react-icons/bs'

type Props = {}

const Projects = (props: Props) => {
    return (
        <main className="projects bg-[#1B2430] min-h-screen pt-20">
            <div className='flex md:flex-row flex-col items-start'>
                <section className='flex w-full md:w-[400px] p-4 leading-8 items-center md:items-center justify-between list-none  md:flex-col flex-row '>
                    <li className='border md:border-none p-2 text-sm md:text-sm rounded-md cursor-pointer font-semibold  my-0 md:my-3'>Projects</li>
                    <li className='border md:border-none p-2 text-sm md:text-sm rounded-md cursor-pointer font-semibold my-0 md:my-3'>Libraries</li>
                    <li className='border md:border-none p-2 text-sm md:text-sm rounded-md cursor-pointer font-semibold my-0 md:my-3'>Others</li>
                </section>

                <section className='w-full px-6'>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                        

                        {
                            projects.map((data, index) => {
                                return(
                                    <div key={index} className='my-3 shadow bg-slate-900 text-slate-300  overflow-hidden p-4'>
                                        <p className='leading-8 font-medium text-xl tracking-wide '>{data.title}</p>
                                        <small className=''>{data.desc}</small>

                                        <div className='my-3 grid grid-cols-2 gap-4 content-center'>{data.stacks.map((item, index) => {
                                            return (
                                                <li className='border text-xs text-center hover:bg-slate-800 hover:text-slate-300 rounded p-2 border-slate-400 list-none' key={index}>{item}</li>
                                            )
                                        })}</div>
                                        <span className='flex items-center'><BsArrowUpRightCircle /> <p className='ml-3'>Visit <a href={data.demo}>Demo</a></p></span>
                                    </div>
                                )
                            })
                        }

                    </div>
                </section>
            </div>

        </main>
    )
}

export default Projects