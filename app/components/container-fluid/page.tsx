import React from 'react'
import Image from 'next/image'

function Container() {
  return (
    <div className='md:w-[1366px] md:h-[682px] xs:w-[414px] xs:h-[999px] relative xs:top-[120px] 
    md:top-0 flex'>
      <div className='md:w-[1366px] md:h-[682px] xs:w-[414px] xs:h-[911.25px] flex md:gap-[30px] 
     xs:gap-7 absolute md:left-[70px] xs:items-center md:items-start md:flex-row xs:flex-col-reverse'>
        <Image src={'/image/Couple-img.svg'}
        alt='Couple Image'
        width={704}
        height={682}
        className='xs:w-[414px] md:w-[704px] xs:h-[407px] md:h-[682px]'></Image>
        <div className='md:w-[573px] md:h-[326px] xs:w-[384.33px] xs:h-[476.15px] grid md:gap-[30px]
        xs:gap-[32.78] flex-col md:pl-[80px] md:pt-[180px] '>
          <h1 className='w-[122px] h-6 font-bold font-montserrat text-base tracking-[0.1px]
          text-[#BDBDBD] xs:text-center md:text-start relative xs:left-24 md:left-0'>SUMMER 2020</h1>
          <h1 className='md:w-[375px] xs:w-[303.48px] md:h-[100px] xs:h-[140.5px] font-montserrat
           font-bold text-[40px] leading-[50px] xs:text-center 
           md:text-start text-[#252B42] tracking-[0.2px]'>Part of the Neural 
          Universe</h1>
          <h1 className='md:w-[376px] xs:w-[262.27px] xs:h-[84.3px] md:h-[60px] text-[#737373] 
          font-normal font-montserrat text-xl xs:text-center md:text-start
          tracking-[0.2px]'>We know how large objects will act, 
          but things on a small scale.</h1>
          <div className='w-[338px] h-[52px] flex gap-[10px] md:flex xs:hidden '>
            <button className='w-[173px] h-[52px] rounded-[5px] py-[15px] px-10 flex gap-[10px]
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
          {/* button for mobile */}
          <div className='w-[165px] h-[129px] flex gap-[25px] relative left-[60px] flex-col xs:flex md:hidden '>
            <button className='w-[156px] h-[52px] rounded-[5px] py-[15px] px-10 flex gap-[10px]
            bg-[#23A6F0]'>
            <h1 className='w-[76px] h-[22px] font-montserrat font-bold text-sm items-center
            text-[#FFFFFF] tracking-[0.2px]'>BUY NOW</h1>              
            </button>
            <button className='w-[165px] h-[52px] rounded-[5px] py-[15px] px-10 flex gap-[10px]
            border-[#23A6F0] border-[1px]'>
              <h1 className='w-[85px] h-[22px] font-montserrat font-bold text-[12px] leading-[22px] 
              items-center tracking-[0.2px] text-[#23A6F0] text-center'>LEARN MORE</h1>
            </button>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Container