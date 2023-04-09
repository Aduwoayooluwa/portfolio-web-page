import Button from '@/components/threejs/Spring'
import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
type Props = {}

const Container = (props: Props) => {
    
    const [inputText, setInputText] = React.useState({
        full_name: "",
        subject: "",
        message: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target 

        setInputText({...inputText, [name]: value })
        console.log(inputText)
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(window.location.origin)
        if (!inputText.full_name || !inputText.subject || !inputText.message) {
            toast('fill in the details')
        }
        try {
            axios.post(`${window.location.origin}/api/send_mail`, {
                name: inputText.full_name,
                subject: inputText.subject,
                message: inputText.message,

            }).then(() => {
                toast('success sending email')
            })

            
        }
        catch (error: any) {
            toast('error sending email')
        }
        finally {
            setInputText({
                full_name: "",
                subject: "",
                message: ""
            })
            
        }

    }
    return (
        <div id='footer' className='h-fit py-5 w-full grid place-items-center bg-[#1B2430] saturate-100'>
            
            <section className='z-20 grid place-items-center py-10 px-5  h-fit bg-slate-900 w-full md:w-2/3'>
            <p className='text-white font-semibold text-2xl'>Contact Me</p>
                <input required={true} onChange={handleInputChange} name='full_name' value={inputText.full_name} type='text' placeholder='Enter your name' className='md:w-3/5 w-full border p-3 bg-white outline-none focus:border-purple-600 py-3 my-3  border-slate-700 rounded-md'/>

                <input required onChange={handleInputChange} name='subject' value={inputText.subject} type='text' placeholder='Enter Subject' className='w-full md:w-3/5 border p-3 bg-white outline-none focus:border-purple-600 py-3 my-3 border-slate-700 rounded-md'/>
            
                <textarea required onChange={handleInputChange} name='message' value={inputText.message} className='w-full md:w-3/5 border p-3 bg-white outline-none focus:border-purple-600 py-3 my-3 h-[300px]  border-slate-700 rounded-md'>

                </textarea>

                <Button color='#2F58CD' onClick={(e: any) => handleSubmit(e)} name='Send Message'/>
        
            </section>
            
        </div>
    )
}

export default Container