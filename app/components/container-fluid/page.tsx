import React from 'react'
import Image from 'next/image'

function Container() {
  return (
    <div className=' md:h-[682px] xs:h-[999px] relative xs:top-[120px] 
    md:top-[47px] flex'>
      <div className='md:w-[1349px] md:h-[682px]  xs:h-[911.25px] flex md:gap-[30px] 
     xs:gap-7 absolute left-[20px] md:left-[0px] xs:items-center md:items-start md:flex-row xs:flex-col-reverse'>

         <div className=' md:w-[704px] xs:h-[407px] md:h-[682px] relative md:left-[50px]'>
        <Image src={'/image/Couple-img.svg'}
        alt='Couple Image'
        width={388}
        height={407}
        className='md:w-[725px] md:h-[774px] w-[388px] h-[407px] relative left-[-10px] md:left-[36px] md:top-[-48px]'></Image>
        </div> 
        <div className='md:w-[573px] md:h-[326px] xs:w-[382.33px] xs:h-[476.15px] grid md:gap-[30px]
        xs:gap-[32.78] flex-col pl-[30px] md:pl-[80px] md:pt-[180px] '>
          <h1 className='w-[122px] h-6 font-bold font-montserrat text-base tracking-[0.1px]
          text-[#BDBDBD] xs:text-center md:text-start relative xs:left-24 md:left-0'>SUMMER 2020</h1>
          <h1 className='md:w-[375px] xs:w-[303.48px] md:h-[100px] xs:h-[140.5px] font-montserrat
           font-bold text-[40px] leading-[50px] xs:text-center 
           md:text-start text-[#252B42] tracking-[0.2px]'>Part of the Neural 
          Universe</h1>
          <h1 className='md:w-[376px] xs:w-[262.27px] xs:h-[84.3px] md:h-[60px] text-[#737373] 
          font-normal font-montserrat text-xl relative left-[20px] md:left-0 xs:text-center md:text-start
          tracking-[0.2px]'>We know how large objects will act, 
          but things on a small scale.</h1>
          <div className='md:w-[338px] md:h-[52px] w-[165px] h-[129px] flex gap-[25px] md:gap-[10px] 
          relative left-[60px] md:left-0 flex-col md:flex-row'>
            <button className='w-[173px] h-[52px] rounded-[5px] py-[15px] px-10 flex gap-[10px]
            md:bg-[#2DC071]  bg-[#23A6F0]'>
            <h1 className='w-[93px] h-[22px] font-montserrat font-bold text-sm items-center
            text-[#FFFFFF] tracking-[0.2px]'>BUY NOW</h1>              
            </button>
            <button className='w-[173px] h-[52px] rounded-[5px] py-[15px]  px-10 flex gap-[10px]
            border-[#2DC071] border-[1px]'>
              <h1 className='w-[93px] h-[22px] font-montserrat font-bold text-sm items-center
           tracking-[0.2px] md:text-[#2DC071] text-[#23A6F0]'>READ MORE</h1>
            </button>
          </div>
         
        </div>
      </div>
        
    </div>
  )
}

export default Container