import React from 'react'
import Image from 'next/image'

function PrcCta() {
  return (
    <div className='md:w-[1349px] md:h-[582px] bg-[#FFFFFF]'>
        <div className='md:w-[1050px] md:h-[602px] relative left-[195px] py-[160px] flex gap-24'>
        <div className='md:w-[547px] md:h-[282px] flex gap-[30px] flex-col '>
            <h2 className='md:w-[547px] md:h-[50px] font-montserrat font-bold text-[#252B42]
            md:text-[40px] md:leading-[50px] tracking-[0.2px] text-center relative left-[220px]'>
                Start your 14 days free trial</h2>
            <h1 className='md:w-[411px] md:h-10 font-montserrat font-normal text-[#737373]
            text-[14px] leading-5 text-center relative left-[300px] tracking-[0.2px]'>Met minim Mollie non desert Alamo est sit cliquey dolor 
            do met sent. RELIT official consequent.</h1>
            <button className='md:w-[186px] md:h-[52px] flex gap-[10px] rounded-[5px] bg-[#23A6F0]
            py-[15px] px-10 hover:bg-[#395185] duration-[1000px] relative left-[400px]'>
            <h2 className='md:w-[106px] md:h-[22px] text-white font-montserrat font-bold
            text-[14px] leading-[22px] text-center tracking-[0.2px]'>Try it free now</h2>
            </button>
            <div className='md:w-[242px] md:h-[50px] p-[10px] flex gap-[34px] relative left-[370px]
            flex-row'>
                <Image src={'/image/twitter-blue.svg'}
                alt='Twitter Icon'
                width={30}
                height={25}></Image>
                <Image src={'/image/facebook-blue.svg'}
                alt='Facebook Icon'
                width={30}
                height={30}></Image>
                <Image src={'/image/instagram-blue.svg'}
                alt='Instagram Icon'
                width={30}
                height={25}></Image>
                <Image src={'/image/contact-linkedin.svg'}
                alt='LinkedIn Icon'
                width={30}
                height={25}></Image>

            </div>
        </div>
        </div>
    </div>
  )
}

export default PrcCta