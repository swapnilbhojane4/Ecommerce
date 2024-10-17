import React from 'react'

const NewsletterBox = () => {

    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>

            <form onSubmit={onSubmit}
                className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none' type='email'
                    placeholder='Enter your email' />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSRIBE</button>
            </form>
            <p>JOIN OUR NEWSLETTER</p>
            <div className='social_network flex text-gray-500 sm:flex-row justify-center gap-2 py-5 text-center'>
                <p>Instagram</p>
                <p>LinkedIn</p>
                <p>Github</p>
                <p>X</p>
            </div>
        </div>
    )
}

export default NewsletterBox