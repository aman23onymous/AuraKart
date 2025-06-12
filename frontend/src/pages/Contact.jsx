import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-700'>Our Store</p>
          <p className='text-gray-600'>Wills francis station <br />Suite 350,Tengra mor,Varanasi</p>
          <p className='text-gray-600'>Tel:(234):459-4337 <br />E-mail: admin@Aurakart.com</p>
          <p className='font-semibold text-xl text-gray-700'>Careers at Aura-kart</p>
          <p className='text-gray-600'>Learn more about our teams and job opportunities</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs accross Aurakart</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
