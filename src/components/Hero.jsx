import React from 'react'
import airplane from '../assets/airplane.png'
import hero from '../assets/hero-image.jpg'

const Hero = () => {
  return (
    <section id="home" className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8'>
      {/*left col */}
      <div className='w-full md:w-1/2 space-y-8'>
        <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
          <span className='text-purple-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform'>★</span>
          <span className='text-sm font-medium'>Get an exciting start to your trip</span>
        </div>

        <h1 className='text-start text-4xl md:text-4xl lg:text-5xl font-bold leading-tight'>
          <span>
            Get ready to make beautiful memories
          </span>
          <span> </span>
          <span className='text-purple-600 relative inline-block'>
            <span>
              during your travels
            </span>
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span>
          </span>with us.
          <span className='inline-block ml-2 hover:animate-pulse'>
            <img src={airplane} />
          </span>
        </h1>

        <p className='text-gray-600 text-lg md:text-xl max-w-xl text-start'>Experience your best travel journey with all accommodation, food and beverage routes, with our professional tour guides.</p>

        <div className='flex gap-3 max-w-md'>
          <input
            type="email"
            placeholder='Email address'
            className='flex-1 px-6 py-4 border-gray -200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-300 transition-all' />

          <button className='bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300'> →</button>
        </div>
      </div>
      {/*right col */}
      <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
        <div className='relative'>
          <img src={hero} className='rounded-4xl relative z-10 hover:scale-[1.02] transition-transform duration-300'/>
        </div>
      </div>
    </section>
  )
}

export default Hero