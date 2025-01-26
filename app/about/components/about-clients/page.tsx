
import React from 'react'
import AboutLogos from './about-logos/page'

function AboutClients() {
  return (
    <div className='md:w-[1342px] md:h-[479px] relative bg-[#FAFAFA]'>
        <div className='md:w-[1050px] md:h-[479px] absolute md:left-[195px] py-20 flex gap-6 flex-col'>
            <div className='md:w-[864px] md:h-[120px] flex gap-[30px] relative left-[240px] flex-col'>
                <h1 className='md:w-[496px] md:h-[50px] font-bold font-montserrat text-[#252B42]
                text-[40px] leading-[50px] tracking-[0.2px] text-center relative left-[20px]'>Big Companies Are Here</h1>
                <h2 className='md:w-[547px] md:h-10 text-[#737373] font-montserrat font-normal text-[14px]
                leading-[20px] text-center tracking-[0.2px]'>Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics </h2>
            </div>
            <AboutLogos/>

        </div>

    </div>
  )
}

export default AboutClients