import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>At Aura Kart, we’re more than just an online store – we’re a vibe, a culture, and a growing community of trendsetters who believe shopping should be expressive, effortless, and ethical.

        Aura Kart is growing – fast. We're expanding our product lines, collaborating with influencers, and creating original content to inspire and connect. The best part? You're invited on this journey.</p>
          <p>Founded with a simple yet powerful vision – to redefine everyday shopping for the bold, the creative, and the conscious – Aura Kart brings you a curated mix of fashion, lifestyle, and utility products that reflect your personality and values.

Whether you're into streetwear, minimal chic, or quirky accessories, Aura Kart is your digital playground.
<br />
We are:  <br />

💬 Youth-driven: Built by Gen Z, for Gen Z
<br />
🌈 Style-focused: Always fresh, always ahead of the trend
<br />
⚡ Hassle-free: One-click checkout, easy returns, and blazing-fast delivery
<br />
🤝 Inclusive: Fashion and products for every gender, shape, and style</p>

          <b className="text-gray-800">Our Mission</b>
          <p>To create an inspiring online space where self-expression is celebrated, trends are born, and quality is never compromised.

We're here to help you discover not just what to buy, but why it matters. Aura Kart is where good taste meets good intentions.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US?'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Curated Collections:</b>
          <p> Each product you see on Aura Kart is handpicked to meet our aesthetic and quality benchmarks.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Affordable Luxury: </b>
          <p>We make high-style accessible without draining your wallet.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Sustainable Choices:</b>
          <p> We support small-scale artisans and eco-conscious manufacturing, so your cart isn’t just smart – it’s kind</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer-First Attitude:</b>
          <p> 24/7 support, no-questions-asked return policy, and a team that actually listens.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
