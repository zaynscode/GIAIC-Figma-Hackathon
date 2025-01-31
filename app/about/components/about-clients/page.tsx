
import React from 'react'
import AboutLogos from './about-logos/page'

function AboutClients() {
  return (
    <div className='md:w-[1342px] md:h-[479px] w-[470px] h-[1444px] relative md:top-0 top-[1250px] bg-[#FAFAFA]'>
        <div className='md:w-[1050px] md:h-[479px] w-[410px] h-[1192px] relative md:top-0 top-[120px] 
        md:left-[195px] py-20 flex gap-6 flex-col'>
            <div className='md:w-[864px] md:h-[120px] w-[325px] h-[240px] flex gap-[30px] relative
            md:left-[240px] left-[90px] flex-col'>
                <h1 className='md:w-[496px] md:h-[50px] w-[287px] h-[150px] font-bold font-montserrat 
                text-[#252B42] text-[40px] leading-[50px] tracking-[0.2px] text-center relative 
                 md:left-[20px]'>Big Companies Are Here</h1>
                <h2 className='md:w-[547px] md:h-10 w-[287px] h-[60px] text-[#737373] font-montserrat font-normal text-[14px]
                leading-[20px] text-center tracking-[0.2px]'>
                  Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics </h2>
            </div>
            <AboutLogos/>

        </div>

    </div>
  )
}

export default AboutClients