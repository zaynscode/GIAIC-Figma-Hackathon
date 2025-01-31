import React from 'react'
import Image from 'next/image'

function AboutTestimonials() {
  return (
    <div className='md:w-[1343px] md:h-[636px] w-[414px] h-[520px] relative md:top-0 top-[1250px] bg-[#2A7CC7] 
    flex-row'>
        <div className='md:w-[1050px] md:h-[636px] w-[414px] h-[388px] relative md:top-0 top-[60px] md:left-[195px]
         py-[30px] md:py-[112px] flex gap-9'>
            <div className='md:w-[1050px] md:h-[411px] md:justify-between '>
                <div className='md:w-[438px] md:h-[238px] w-[272px] h-[327px] flex gap-6 flex-col relative
                 md:top-[100px] place-items-center left-[90px] md:left-[100px]'>
                    <h1 className='w-[128px] md:h-6 text-white font-montserrat font-bold text-base
                    tracking-[0.1px]'>WORK WITH US</h1>
                <h1 className='md:w-[440px] md:h-[50px] w-[274px] h-[100px] text-white font-montserrat
                 font-bold text-[40px] leading-[50px] tracking-[0.2px] text-center md:text-start'>
                  Now Let’s grow Yours</h1>
                <h1 className='md:w-[440px] md:h-10 w-[257px] h-20 font-normal text-[14px] leading-[20px]
                 text-white tracking-[0.2px] text-center md:text-start'>
                  The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </h1>
                <button className='w-[132px] h-[52px] flex gap-10 rounded-[5px] md:bg-[#23A6F0] py-[15px] px-10 hover:bg-[#737373] border-[1px] border-[#FAFAFA]'>
                    <h1 className='font-montserrat text-white font-bold text-[14px] leading-[22px]
                    tracking-[0.2px] text-center'>Button</h1>
                </button>
                </div>

                <Image src={'/image/about-2.svg'}
                              alt=' About Testimonial Image'
                              width={590}
                              height={640}
                              className='absolute left-[558px] top-[0px] md:flex xs:hidden'>
                              </Image>
                
                  </div>
                  </div>


    </div>
  )
}

export default AboutTestimonials