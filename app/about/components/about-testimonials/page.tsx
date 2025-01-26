import React from 'react'
import Image from 'next/image'

function AboutTestimonials() {
  return (
    <div className='md:w-[1343px] md:h-[636px] relative bg-[#2A7CC7] flex-row'>
        <div className='md:w-[1050px] md:h-[636px] relative left-[195px] py-[112px]'>
            <div className='md:w-[1050px] md:h-[411px] justify-between '>
                <div className='md:w-[438px] md:h-[238px] flex gap-6 flex-col relative top-[100px] left-[100px]'>
                    <h1 className='md:w-[128px] md:h-6 text-white font-montserrat font-bold text-base
                    tracking-[0.1px]'>WORK WITH US</h1>
                <h1 className='md:w-[440px] md:h-[50px] text-white font-montserrat font-bold
                text-[40px] leading-[50px] tracking-[0.2px]'>Now Let’s grow Yours</h1>
                <h1 className='md:w-[440px] md:h-10 font-normal text-[14px] leading-[20px] text-white tracking-[0.2px]'>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </h1>
                <button className='md:w-[132px] md:h-[52px] flex gap-10 rounded-[5px] bg-[#23A6F0] py-[15px] px-10 hover:bg-[#737373] border-[1px] border-[#FAFAFA]'>
                    <h1 className='font-montserrat text-white font-bold text-[14px] leading-[22px]
                    tracking-[0.2px] text-center'>Button</h1>
                </button>
                </div>

                <Image src={'/image/about-2.svg'}
                              alt=' About Testimonial Image'
                              width={590}
                              height={640}
                              className='absolute left-[558px] top-[0px]'>
                              </Image>
                
                  </div>
                  </div>


    </div>
  )
}

export default AboutTestimonials