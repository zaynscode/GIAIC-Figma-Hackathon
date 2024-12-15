import React from 'react'
import Image from 'next/image'

function Container() {
  return (
    <div className='w-[1440px] h-[682px] flex'>
      <div className='w-[1439px] h-[682px] flex gap-[30px] absolute left-[70px]'>
        <Image src={'/image/Couple-img.svg'}
        alt='Couple Image'
        width={704}
        height={682}></Image>
        <div className='w-[573px] h-[326px] flex gap-[30px] flex-col pl-[80px] pt-[180px] '>
          <h1 className='w-[122px] h-6 font-bold font-montserrat text-base tracking-[0.1px]
          text-[#BDBDBD]'>SUMMER 2020</h1>
          <h1 className='w-[375px] h-[100px] font-montserrat font-bold text-[40px] leading-[50px]
          text-[#252B42] tracking-[0.2px]'>Part of the Neural 
          Universe</h1>
          <h1 className='w-[376px] h-[60px] text-[#737373] font-normal font-montserrat text-xl
          tracking-[0.2px]'>We know how large objects will act, 
          but things on a small scale.</h1>
          <div className='w-[338px] h-[52px] flex gap-[10px]'>
            <button className='w-[156px] h-[52px] rounded-[5px] py-[15px] px-10 flex gap-[10px]
            bg-[#2DC071]'>
            <h1 className='w-[76px] h-[22px] font-montserrat font-bold text-sm items-center
            text-[#FFFFFF] tracking-[0.2px]'>BUY NOW</h1>              
            </button>
            <button className='w-[173px] h-[52px] rounded-[5px] py-[15px] px-10 flex gap-[10px]
            border-[#2DC071] border-[1px]'>
              <h1 className='w-[93px] h-[22px] font-montserrat font-bold text-sm items-center
           tracking-[0.2px] text-[#2DC071]'>READ MORE</h1>

            </button>

          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Container
