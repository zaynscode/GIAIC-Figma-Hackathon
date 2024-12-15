import React from 'react'
import Image from 'next/image'

function Carousel2() {
  return (
    <div className='w-[1440px] h-[709px] rounded-[5px] border-[1px] border-[#DEDEDE] bg-[#23856D]'>
        <div className='w-[1440px] h-[709px] '>
            <div className='w-[1036px] h-[711px] absolute left-[209px] py-28 flex gap-20'>
                <div className='w-[1049px] h-[599px] flex gap-[30px] flex-row'>
                    <div className='w-[509px] h-[432px] pt-[60px] flex-col flex gap-[30px]'>
                        <h1 className='w-[154px] h-[30px] font-montserrat font-normal text-xl
                        tracking-[0.2px] text-[#FFFFFF]'>SUMMER 2020</h1>
                        <h1 className='w-[509px] h-[160px] font-bold text-[58px] leading-[80px]
                        text-[#FFFFFF] tracking-[0.2px]'>Vita Classic Product</h1>
                    <h1 className='w-[341px] h-10 font-normal font-montserrat text-[15px] leading-[20px]
                         tracking-[0.2px] text-[#FFFFFF]'>
                        We know how large objects will act, We know how are objects will act, We know</h1>
                    <div className='w-[295px] h-[52px] flex gap-[34px] justify-between'>
                        <h1 className='w-[77px] h-8 font-montserrat font-bold text-2xl text-center
                        text-[#FFFFFF] tracking-[0.1px] py-[7px]'>$16.48</h1>
                        <button className='w-[184px] h-[52px] rounded-[5px] py-[15px] px-10
                        flex gap-[10px] bg-[#2DC071]'>
                        <h1 className='w-[104px] h-[22px] font-montserrat font-bold
                         text-sm leading-[22px] text-center tracking-[0.2px] text-[#FFFFFF]'>ADD TO CART</h1>
                        </button>
                    </div>
                    </div>
                    <Image src={'/image/carousel2.svg'}
                    alt='Carousel Image'
                    width={510}
                    height={685}></Image>    

            
                </div>
            </div>
        </div>

    </div>
  )
}

export default Carousel2