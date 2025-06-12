import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.Logo} className='mb-5 w-32' alt="" />
            <p className="w-full md:w-2/3 text-gray-700">AuraKart isn't just fashion — it's your vibe, your mood, your moment. From trendsetting fits to timeless classics, we bring you pieces that speak your style. Live bold. Dress louder. Own your aura.</p>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-700'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">Get in Touch</p>
            <ul className='flex flex-col gap-1 text-gray-700'>
                <li>+91-6394080459</li>
                <li>contact@aurakart.ac.in</li>
            </ul>
        </div>
      </div>

        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2025 @AuraKart.com - All rights reserved</p>
        </div>

    </div>
  )
}

export default Footer
