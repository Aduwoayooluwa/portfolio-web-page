import Image from 'next/image'
import React from 'react'

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
const Work = (props: Props) => {
    return (
        <main className='w-full bg-slate-700 h-fit p-3 flex flex-col items-center'>
            <div className='w-4/5 z-10'>
                <p className='font-bold text-xl md:text-2xl text-center  text-slate-300 py-4'>Work Experiences</p>

                <section className='w-full '>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                        

                        {
                            experience.map((data, index) => {
                                return(
                                    <div key={index} className='my-3 border rounded-md shadow bg-slate-900 text-slate-300  overflow-hidden p-4'>
                                        <p className='leading-8 font-medium text-xl tracking-wide '>{data.name}</p>
                                        <small className=''>{data.job_title}</small>
                                        <br></br>
                                        <i className='text-xs'>{data.date_joined} to {data.date_left}</i>
                                        <br></br>
                                        <p className='text-sm font-medium'>Stack Used</p>
                                        <div className='grid grid-cols-2 gap-4 content-center'>{data.stacks.map((item, index) => {
                                            return (
                                                <li className='border text-xs text-center hover:bg-slate-800 hover:text-slate-300 rounded p-2 border-slate-400 list-none' key={index}>{item}</li>
                                            )
                                        })}</div>
                                        <small>Visit <a href={data.website}>Website</a></small>
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

export default Work