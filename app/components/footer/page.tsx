import React from 'react'
import Image from 'next/image'
import Footer2 from './footer-2/page'

function Footer() {
  return (
    <div className='md:w-[1366px] md:h-[488px] xs:w-[414px] xs:h-[1342px] xs:flex-col'>
        <div className='md:w-[1440px] h-[142px] xs:w-[414px] md:flex xs:flex-col relative bg-[#FAFAFA] '>
            <div className='md:w-[1050px]  md:h-[138px] absolute md:left-[195px] xs:left-[50px] py-[10px]  '>
                <div className='md:w-[1049.5px] md:h-[58px] flex md:gap-[577.5px] xs:flex-col
                md:flex-row relative md:top-[30px] '>
                    <div className='w-[236px] h-[58px] flex gap-[10px]'>
                        <div className='w-[187px] h-[58px]'>
                           <h1 className='w-[108px] h-8 absolute top-[13px] font-bold font-montserrat 
                           text-2xl text-[#252B42] tracking-[0.1px]'>Bandage
                            </h1>                            
                        </div>
                    </div>
                    {/* social icons */}
                    <div className='w-[236px] h-6 relative top-[13px]'>
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