import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>   
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
           
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    We are a team of designers and developers that create high quality e-commerce templates with modern and clean design. We create high quality e-commerce templates with modern and clean design.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET TOUCHED</p>
                <ul className='flex flex-col gap-1 text-gray-600'>  
                    <li>(+63) 968-610-8590</li>
                    <li>contact@aaronmorata.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'> Copyright ©2026 Aaron Morata.com - All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer