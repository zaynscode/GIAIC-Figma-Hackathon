import React from 'react'
import Image from 'next/image'
import Footer2 from './footer-2/page'

function Footer() {
  return (
    <div className='w-[1440px] h-[488px]'>
        <div className='w-[1440px] h-[142px] flex flex-col relative'>
            <div className='w-[1050px] h-[138px] absolute left-[195px] py-[10px]'>
                <div className='w-[1049.5px] h-[58px] flex gap-[577.5px]'>
                    <div className='w-[236px] h-[58px] flex gap-[10px]'>
                        <div className='w-[187px] h-[58px]'>
                           <h1 className='w-[108px] h-8 absolute top-[13px] font-bold font-montserrat 
                           text-2xl text-[#252B42] tracking-[0.1px]'>Bandage
                            </h1>                            
                        </div>
                    </div>
                    {/* social icons */}
                    <div className='w-[236px] h-6'>
                        <div className='w-28 h-6 flex gap-5'>
                            <Image src={'/image/facebook-blue.svg'}
                            alt='Facebook icon'
                            width={24}
                            height={24}></Image>
                            <Image src={'/image/instagram-blue.svg'}
                            alt='Instagram icon'
                            width={24}
                            height={24}></Image>
                            <Image src={'/image/twitter-blue.svg'}
                            alt='Twitter icon'
                            width={24}
                            height={19.76}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer2/>
    </div>
  )
}

export default Footer