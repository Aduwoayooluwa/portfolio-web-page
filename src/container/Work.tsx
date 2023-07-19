import { projects } from '@/utils/projects'
import Image from 'next/image'
import React, { useRef } from 'react'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import { config, useInView } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { useRouter } from 'next/router'

type Props = {}

const experience = [
    {
        name: 'Sterling Bank PLC',
        job_title: 'Frontend Web Developer',
        date_joined: 'April 2022',
        date_left: 'Present',
        stacks: ['React', 'JavaScript', 'TypeScript', 'Next.js'],
        website: 'https://sterling.ng'
    },
    {
        name: 'Uridium Technologies',
        job_title: 'Web Developer',
        date_joined: 'April 2022',
        date_left: 'Present',
        stacks: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Node.js'],
        website: 'https://uridumtechnologies.com'
    },
    {
        name: 'The Webgate',
        job_title: 'Digital & SEO Marketer',
        date_joined: 'November 2021',
        date_left: 'January 2023',
        stacks: [''],
        website: 'https://thewebgate.net'
    },
    {
        name: 'Hashnode Blog',
        job_title: 'Technical Writer',
        date_joined: 'April 2022',
        date_left: 'Present',
        stacks: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Node.js', 'CSS', 'Tailwind', 'Astro.build'],
        website: 'https://codingpastor.dev'
    },

]

const fn =
    (order: number[], active = false, originalIndex = 0, curIndex = 0, y = 0) =>
        (index: number) =>
            active && index === originalIndex
                ? {
                    y: curIndex * 100 + y,
                    scale: 1.1,
                    zIndex: 1,
                    shadow: 15,
                    immediate: (key: string) => key === 'zIndex',
                    config: (key: string) => (key === 'y' ? config.stiff : config.default),
                }
                : {
                    y: order.indexOf(index) * 100,
                    scale: 1,
                    zIndex: 0,
                    shadow: 1,
                    immediate: false,
                }

const Work = (props: Props) => {
    const order = useRef(experience.map((_: any, index: any) => index)) // Store indicies as a local ref, this represents the item order
    const router = useRouter()

    const [ref, springs] = useInView<any>(
        () => ({
            from: {
                opacity: 0,
                y: 20,
            },
            to: {
                opacity: 0.2,
                y: 0,
            },
        }),
        {
            rootMargin: '-40% 0%',
        }
    )


    return (
        <main ref={ref} style={springs} id='work' className='w-full saturate-100 h-fit p-3 flex flex-col items-center'>

            <div className='w-4/5 z-10'>
                <p className='font-bold text-xl md:text-2xl text-center  text-slate-300 py-4'>Work Experiences</p>

                <section className='w-full '>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>


                        {
                            projects.slice(0, 6).map((data, index) => {
                                return (
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
                    <button className="text-white p-2 border text-xs rounded-md shadow" onClick={() => {
                        router.push("/projects")
                    }}>View More Projects</button>
                </section>
            </div>
        </main>
    )
}

export default Work