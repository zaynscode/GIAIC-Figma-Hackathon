import React from 'react'
import FirstCol from './paragrahs/first-col/page'
import SecondCol from './paragrahs/first-col/second-col/page'
import ThirdCol from './paragrahs/third-col/page'

function FAQ() {
  return (
    <div className='md:w-[1349px] md:h-[1037px] bg-white'>
        <div className='md:w-[1056px] md:h-[1037px] relative left-[192px] py-20 flex gap-[50px] flex-col
        '>
        
        <div className='md:w-[1050px] md:h-[210px] py-[45px] '>
            <div className='md:w-[607px] md:h-[120px] flex gap-[10px] place-items-center relative
            left-[180px] flex-col'>
            <h2 className='md:w-[262px] md:h-[50px] font-montserrat font-bold text-[#252B42] 
            md:text-[40px] md:leading-[50px] tracking-[0.2px]'>Pricing FAQs</h2>
            <h2 className='md:w-[552px] md:h-[60px] font-montserrat font-normal text-[#737373] 
            md:text-[20px] md:leading-[30px] tracking-[0.2px] text-center'>
                Problems trying to resolve the conflict between 
            the two major realms of Classical physics</h2>
            </div>
        </div>

        <FirstCol/>
        <SecondCol/>
        <ThirdCol/>

        <h1 className='md:w-[552px] md:h-[30px] font-montserrat font-normal text-[#737373]
        md:text-[20px] md:leading-[30px]  tracking-[0.2px] text-center relative left-[230px]'>Haven’t got your answer? Contact our support</h1>

        </div>
    </div>
  )
}

export default FAQ