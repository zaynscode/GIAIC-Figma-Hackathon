import React from 'react'
import Image from 'next/image'

function Carousel2() {
  return (
    <div className='md:w-[1366px] xs:w-[400px] xs:h-[1200px] md:h-[709px] rounded-[5px] border-[1px] 
    border-[#DEDEDE] bg-[#23856D]'>
        <div className='md:w-[1266px] md:h-[709px] xs:w-[349px] xs:h-[1200px]'>
            <div className='md:w-[1266px] md:h-[711px] xs:w-[348px] xs:h-[1200px] absolute 
            md:left-[209px] xs:left-16 md:px-0 py-28 flex gap-20'>
                <div className='md:w-[1049px] md:h-[602px] xs:h-[1200px] absolute xs:top-14 md:top-0
                flex gap-[30px] md:flex-row xs:flex-col '>
                    <div className='md:w-[509px] md:h-[432px] xs:w-[599px] xs:h-[429px] pt-[90px]
                     flex-col flex gap-[30px] '>
                        <h1 className='w-[154px] h-[30px] font-montserrat font-normal text-xl
                        tracking-[0.2px] text-[#FFFFFF] xs:text-center md:text-balance relative 
                        xs:left-12 md:left-0 '>SUMMER 2020</h1>
                        <h1 className='md:w-[509px] md:h-[160px] xs:h-[160px] xs:w-[246px] font-bold
                         md:text-[58px] xs:text-[40px] xs:leading-[50px] md:leading-[80px] xs:pl-2 
                         xs:pt-6 text-[#FFFFFF] tracking-[0.2px] xs:text-center md:text-start '>Vita Classic Product</h1>
                    <h1 className='md:w-[341px] xs:w-[291px] h-10 font-normal font-montserrat 
                    xs:text-center md:text-start md:text-[15px] leading-[20px] xs:text-xl 
                    tracking-[0.2px] text-[#FFFFFF]'>
                    We know how large objects will act, We know how are objects will act, We know</h1>
                    <div className='md:w-[295px] xs:w-[184px] xs:h-[104px] md:h-[52px] flex gap-[34px]
                    xs:flex-col md:flex-row xs:justify-items-center xs:m-10 md:m-0 md:justify-between'>
                        <h1 className='w-[77px] h-8 font-montserrat font-bold text-2xl text-center
                        text-[#FFFFFF] tracking-[0.1px] py-[7px] relative xs:left-12 md:left-0'>$16.48</h1>
                        <button className='w-[190px] h-[52px] rounded-[5px] py-[15px] px-10
                        flex gap-[10px] bg-[#2DC071]'>
                        <h1 className='w-[104px] h-[22px] font-montserrat font-bold
                         text-sm leading-[22px] text-center tracking-[0.2px] text-[#FFFFFF]'>ADD TO CART</h1>
                        </button>
                    </div>
                    </div>

                    <Image src={'/image/carousel2.svg'}
                    alt='Carousel Image'
                    width={443}
                    height={685}
                    className='xs:w-[416px] xs:h-[640px] md:h-[685px] md:w-[443px] relative xs:top-[43px]
                    md:top-[22px] xs:right-28 md:flex md:left-[30px]'></Image>    

                
            
                </div>
            </div>
        </div>

    </div>
  )
}

export default Carousel2