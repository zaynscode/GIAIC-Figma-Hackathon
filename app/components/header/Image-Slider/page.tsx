import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ImageSlider() {
  return (
    <div>
        <div className=' md:h-[716px] xs:h-[753px] absolute md:top-[136px] xs:top-[670px] '>
        <Image src={'/image/shop-slide-1.svg'}
        alt='Slider image'
        width={1343}
        height={716}
        className='md:flex xs:hidden'>
        </Image>

        {/* for mobile */}
        <Image src={'/image/shop-slide-2.svg'}
        alt='Slider image for mobile'
        width={412}
        height={753}
        className='xs:flex md:hidden object-cover'>
        </Image>
            <div className='md:w-[1044px] md:h-[651px] xs:h-[705px] absolute top-12
             justify-items-center md:left-[197.5px] py-28 flex-col flex gap-20'>
            <div className='md:w-[1044px] md:h-[457px] xs:h-[560px] py-12 grid gap-5
            xs:gap-[30px]'>
                 <div className='md:w-[599px] md:h-[331px] xs:h-[381px] flex-col xs:gap-[35px] grid md:gap-[20px]
                '>
                    <h1 className='w-[122px] h-6 font-montserrat font-bold text-base text-[#FFFFFF]
                     tracking-normal items-center text-center relative xs:left-[130px] md:left-0'>SUMMER 2020
                    </h1>
                    <h1 className='md:w-[548px] md:h-20 xs:w-[268px] xs:h-[100px] font-montserrat
                     font-bold text-[#FFFFFF] xs:text-[40px] xs:leading-[50px] md:text-[58px]
                    xs:text-center md:text-start tracking-[0.2px] relative xs:left-[60px] md:left-0'>
                      NEW COLLECTION 
                    </h1>
                    <h1 className='md:w-[376px] xs:w-[291px] xs:h-[90px] md:h-[60px] font-normal
                     text-[23px] text-[#FFFFFF] leading-[30px] tracking-[0.2px] xs:text-center
                      md:text-start relative xs:left-[55px] md:left-0'>We know how large objects will act, 
                    but things on a small scale.</h1>
                     <button className='w-[221px] h-[62px] bg-[#2DC071] rounded-[5px] py-[15px] 
                      px-10 grid gap-[10px] relative xs:left-[70px] md:left-0 duration-500 
                      hover:bg-[#252B42]'>
                        <Link href={'/product-list-page'}>
                        <h1 className='w-[141px] h-8 font-montserrat font-bold
                        text-2xl tracking-[0.1px] text-[#FFFFFF] text-center '>SHOP NOW</h1>
                        </Link>

                    </button> 
                    </div> 

            </div>
            </div>
    </div>
    </div>
  )
}

export default ImageSlider