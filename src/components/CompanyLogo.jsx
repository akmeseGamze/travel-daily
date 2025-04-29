import React from 'react'
import bakbitatil from '../assets/bakbitatil.png'
import academicTour from '../assets/academicTour.png'
import dixifuar from '../assets/dixifuar.png'
import lisinya from '../assets/lisinya.png'
import mystambul from '../assets/mystambul.png'

const CompanyLogo = () => {
    const logos=[bakbitatil,academicTour,dixifuar,lisinya,mystambul]
  return (
    <div className='w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start'>
        <div className='w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-purple-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left'>Proud Partner at <br/>Hubspot & Segment</div>
        <div className='flex animate-marquee whitespace-nowrap'>
        {logos.map((logo, index) => (
                    <img key={index} src={logo} alt="company logo" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
                ))}

            {/*duplicate logos */}
          {logos.map((logo,index)=>(
            <img key={`duplicate-${index}`} src={logo} alt="company logo" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'/>
          ))}
        </div>
    </div>
  )
}

export default CompanyLogo