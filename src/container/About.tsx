import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <div id='about' className=' saturate-100 grid place-items-center py-10 px-2 md:p-10 h-fit md:h-[700px] w-full text-white'>

            <summary className=' z-10 bg-slate-900 py-10 w-full md:w-2/3 px-5 leading-8 shadow rounded-lg'>
                <p className='text-center font-semibold text-sm md:text-2xl mb-3'>About Me</p>
                <p className='mb-3'>
                    I am an experienced web developer with a passion for creating innovative and dynamic applications.
                    With years of experience working with a variety of technologies,
                    including Node.js, TypeScript, JavaScript, React, Next.js, Python, and Express.

                </p>

                <p className='my-3'>
                    I have honed my skills in front-end and back-end development. I have a deep understanding of the latest web development trends and tools and uses this knowledge
                    to deliver projects that meet and exceed client expectations.
                </p>

                <p>
                    I am a dedicated team player who thrives in collaborative environments
                    and is always eager to learn and improve his craft.
                    My expertise and commitment to quality make me a valuable asset to any development team.
                </p>
            </summary>



        </div>
    )
}

export default About