import Button from '@/components/threejs/Spring'
import React from 'react'

type Props = {}

const Container = (props: Props) => {
    return (
        <div className='h-fit py-5 w-full grid place-items-center bg-slate-800'>
            
            <section className='z-20 grid place-items-center py-10 px-5  h-fit bg-slate-900 w-full md:w-2/3'>
            <p className='text-white font-semibold text-2xl'>Contact Me</p>
                <input type='text' placeholder='Enter your name' className='w-3/5 border p-3 bg-white outline-none focus:border-purple-600 py-3 my-3  border-slate-700 rounded-md'/>
            
                <input type='text' placeholder='Enter Subject' className='w-3/5 border p-3 bg-white outline-none focus:border-purple-600 py-3 my-3 border-slate-700 rounded-md'/>
            
                <textarea className='w-3/5 border p-3 bg-white outline-none focus:border-purple-600 py-3 my-3 h-[300px]  border-slate-700 rounded-md'>

                </textarea>

                <Button color='#2F58CD' name='Send Message'/>
            </section>
            
        </div>
    )
}

export default Container