import React from 'react'
import capadocia from '../assets/capadocia.jpg'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Tour = () => {
    return (
        <section id="tours" className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
                {/*left */}
                <div className='md:w-1/2 w-full'>
                    <p className='text-orange-500 font-semibold text-3xl'>Tours</p>
                    <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-4/5'>Discover the World, One Unique Tour at a Time</h2>
                    <p className='text-gray-600 mb-8'>Ready to Explore? Your Perfect Tour Awaits! Dive into our exciting world of travel possibilities. We offer a fantastic array of tours, each promising unique adventures and unforgettable moments. Start your journey here and let us guide you to your dream destination.</p>

                    <a href="#" className='text-purple-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>

                        Discover the content of our tours
                        <IoIosArrowRoundForward className='size-8' />
                    </a>
                </div>

                {/*right */}
                <div className='md:w-1/2 w-full'>
                    <img src={capadocia} alt="schedule image" className='w-full h-auto rounded-4xl relative z-10 hover:scale-[1.01] transition-transform duration-300' />
                </div>
            </div>
        </section>
    )
}

export default Tour