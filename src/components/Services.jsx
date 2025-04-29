import React from 'react'
import { BiTime } from 'react-icons/bi'
import { GoGoal } from "react-icons/go";
import { VscCodeReview } from "react-icons/vsc";
import { FcMindMap } from "react-icons/fc";
const services = [
    {
        icon: <GoGoal className="w-8 h-8 text-red-400" />,
        title: "Determine Activities",
        description: "One for all and all for one, Muskehounds are always ready.",
        link: "#learn-more"
    },
    {
        icon: <FcMindMap className="w-8 h-8 text-amber-400" />,
        title: "Expand your Networks",
        description: "Alphabet Village and the subline of her own road.",
        link: "#learn-more"
    },
    {
        icon: <VscCodeReview className="w-8 h-8 text-indigo-600" />,
        title: "Set your Standards",
        description: "Little Blind Text should turn around and return.",
        link: "#learn-more"
    },
    {
        icon: <BiTime className="w-8 h-8 text-cyan-400" />,
        title: "Personal Guide for You",
        description: "Nothing the copy said could convince her.",
        link: "#learn-more"
    }
]
const Services = () => {
    return (
        <section id="services" className='py-20 container mx-auto px-4 sm:px-6 lg:px-34'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 '>
                {/*header */}
                <div className='md:w-1/3 w-full '>
                    <h2 className='text-3xl md:text-4xl font-bold mb-6 md:w-4/5'>
                        Our personalized travel services</h2>
                    <p className='text-gray-600 text-lg mb-4 md:w-4/5'>Discuss your wishes, determine your routes, share your dreams</p>
                    <div className='space-y-3'>
                        <div className='flex items-center gap-2'>
                            <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                            </div>
                            <span className='text-gray-600'>
                                Guidance on visa procedures</span>
                        </div>

                        <div className='flex items-center gap-2'>
                            <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                                <div className='w-2.5 h-2.5 rounded-full bg-indigo-600'></div>
                            </div>
                            <span className='text-gray-600'>
                                Creating routes with professional guides
                            </span>
                        </div>
                    </div>
                    <button className='mt-8 bg-indigo-800 text-white px-8 py-3 cursor-pointer hover:bg-indigo-700 transition-colors rounded-full'>Get Started</button>
                </div>


                {/*service cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {
                        services.map((service, index) => (
                            <div key={index} className='bg-indigo-200 max-w-72 cursor-pointer rounded-2xl p-6 hover:scale-105 hover:shadow-xl transition-all duration-300'>
                                <div className='mb-4'>{service.icon}</div>
                                <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                                <p className='text-gray-600 mb-4'>{service.description}</p>
                                <a href={service.link} className='text-indigo-600 font-medium hover:text-indigo-700 transition-colors'>LEARN MORE</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services