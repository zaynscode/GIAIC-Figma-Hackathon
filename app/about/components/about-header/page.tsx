import React from 'react'
import Image from 'next/image'
import AboutContainer from './about-container/page'
function AboutHeader(){
  return (
            <div className='md:w-[1340px] md:h-[91px] max-xs:w-[414px] xs:h-[532px] xs:bg-[#FAFAFA] md:bg-white'>
                <div className='md:w-[1280px] md:h-[91px] relative md:left-[60px] '>
                    <div className='md:w-[1280px] md:h-[91px]'>
        
                    <div className='w-[187px] h-[58px] relative md:top-[31px] md:left-[120px] xs:top-[23px] 
                    xs:left-[35px]'>
                        <h1 className='w-[108px] h-[32px] relative top-[16px] font-montserrat font-bold
                         text-[#252B42] text-2xl tracking-[0.1px]'>Bandage</h1>
                    </div>
                    <div className='md:w-[815px] md:h-[58px]  relative md:left-[364px] xs:w-[123px] xs:h-[270px]
                    md:bottom-[20px] '>
                        <div className='md:w-[275px] md:h-6 xs:w-[123px] xs:h-[270px] relative md:top-[17px] flex
                        md:left-0 md:gap-[21px] xs:gap-[30px] xs:flex-col md:flex-row xs:top-[84px] xs:left-[70px]'>
                            <h1 className='md:w-[43px] md:h-6 xs:w-[93px] xs:h-[45px] font-montserrat md:font-bold
                            xs:font-normal text-[#737373] md:text-[14px] md:leading-6 xs:text-[30px] 
                            xs:leading-[45px] tracking-[0.2px] xs:text-center md:text-start relative 
                            xs:left-[7px] md:left-0'>Home
                            </h1>
                            <h1 className='md:w-[54px] md:h-6 xs:w-[93px] xs:h-[45px] font-montserrat md:font-bold
                            xs:font-normal text-[#737373] md:text-[14px] md:leading-6 tracking-[0.2px]
                            xs:text-[30px] xs:leading-[45px] text-center relative '>Product
                            </h1>
                            <h1 className='md:w-[52px] md:h-6 xs:w-[107px] xs:h-[45px] font-montserrat md:font-bold
                            xs:font-normal text-[#737373] md:text-[14px] md:leading-6 tracking-[0.2px] xs:text-[30px]
                            xs:leading-[45px] text-center relative'>Pricing
                            </h1>
                            <h1 className='md:w-[58px] md:h-6 xs:w-[122px] xs:h-[45px] font-montserrat md:font-bold
                            xs:font-normal text-[#737373] md:text-[14px] xs:text-[30px] xs:leading-[45px]
                            md:leading-6 tracking-[0.2px] text-center '>Contact
                            </h1>
        
                            <div className='w-[300px] h-[52px] relative top-[3px] left-[215px] flex gap-[45px]
                            xs:hidden md:flex'>
                            
                                    <h1 className='w-[41px] h-[22px] font-montserrat font-bold text-[#23A6F0]
                                    text-sm tracking-[0.2px] text-right'>Login</h1>
                            
        
                            <button className='w-[214px] h-[52px] rounded-[5px] bg-[#23A6F0] py-[15px] px-[25px]
                            flex gap-[15px] relative bottom-[14px] hover:bg-[#252B42] duration-700'>
                                <h2 className='w-[137px] h-[22px] font-montserrat font-bold text-white text-sm
                                tracking-[0.2px] '>Become a member</h2>
                                <Image src={'/image/contact-arrow.svg'}
                                alt='Arrow Icon'
                                width={12}
                                height={10}
                                className='relative top-[5px]'></Image>
                                </button>    
        
                            </div>
                            </div>
                        </div>
        
                    </div>
        
                </div>
        
            </div>
          
  )
}

export default AboutHeader