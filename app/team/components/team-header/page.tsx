import ContactHeader from '@/app/contact-page/components/contact-header/page'
import React from 'react'
import Image from 'next/image'
function TeamHeader() {
  return (
    <div className='md:w-[1349px] md:h-[348px] bg-white'>
    <ContactHeader/>
    <div className='md:w-[870px] md:h-[280px] absolute md:top-[104px] md:left-[285px] py-[50px]'>
    <div className='md:w-[788px] md:h-[180px] flex gap-4 flex-col place-items-center'>
        <h2 className='md:w-[111px] md:h-6 font-montserrat font-bold md:text-base md:text-center 
        text-[#737373] tracking-[0.1px]'>WHAT WE DO</h2>
        <h1 className='md:w-[788px] md:h-20 font-montserrat font-bold md:text-[58px] md:leading-[80px]
         md:text-center text-[#252B42] tracking-[0.2px]'>Innovation tailored for you</h1>
        <div className='md:w-[122px] md:h-11 py-[10px] flex gap-[15px]'>
            <h1 className='md:w-[43px] md:h-6 font-montserrat font-bold md:text-[14px] md:leading-[24px]
         md:text-center text-[#252B42] tracking-[0.2px]'>Home</h1>
         <Image src={'/image/Arrow.svg'}
         alt='Arrow Sign'
         width={9}
         height={11}></Image>
            <h1 className='md:w-10 md:h-6 font-montserrat font-bold md:text-[14px] md:leading-[24px]
         md:text-center text-[#737373] tracking-[0.2px]'>Team</h1>
        </div>
    </div>
    </div>
    </div>
  )
}

export default TeamHeader