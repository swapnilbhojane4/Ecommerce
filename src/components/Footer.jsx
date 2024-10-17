import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10'>
        <div>
          <p className='tex-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600' />
          +91-222-234-8970
          swapnilbhojane4@gmail.com
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>The content of this site is copyright-protected</p>
      </div>
    </>
  )
}

export default Footer