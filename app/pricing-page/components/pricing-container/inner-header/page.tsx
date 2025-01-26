import React from 'react'
import PrcHeader from './prc-header/page'

function InnerHeader() {
  return (
    <div className='md:w-[1070px] md:h-[384px] bg-[#FFFFFF] '>
        <PrcHeader/>
        <div className='md:w-[870px] md:h-[280px] absolute top-[234px] left-[265px] py-[50px] '>
        <div className='md:w-[427px] md:h-[180px] flex gap-4 flex-col'>
        <h1 className='md:w-[71px] md:h-6 font-montserrat font-bold text-base text-center text-[#737373]
        tracking-[0.1px] relative left-[180px]'>PRICING
        </h1>
        <h1 className='md:w-[428px] md:h-20 font-montserrat font-bold text-[58px] leading-[20px]
         text-center text-[#252B42] tracking-[0.1px] relative top-[20px]'>Simple Pricing</h1>
        <div className='md:w-[134px] md:h-11 py-[10px] flex gap-[15px] relative left-[130px] flex-row'>
            <h2 className='md:w-[43px] md:h-6 font-montserrat font-bold text-[14px] leading-6
         text-center text-[#252B42] tracking-[0.2px] '>Home</h2>
        
        <select name="" id="" className='md:w-9 md:h-6 text-[#BDBDBD] -rotate-90 relative md:top-[2px]'></select>
       
        <h2 className='md:w-[52px] md:h-6 font-montserrat font-bold text-[14px] leading-6
         text-center text-[#737373] tracking-[0.2px]'>Pricing</h2>
        </div>
        </div>
        </div>

    </div>
  )
}

export default InnerHeader