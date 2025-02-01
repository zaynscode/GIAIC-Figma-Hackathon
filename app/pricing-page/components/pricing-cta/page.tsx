import React from 'react'
import Image from 'next/image'

function PrcCta() {
  return (
    <div className='md:w-[1343px] h-[582px] bg-[#FFFFFF]'>
        <div className='md:w-[1050px] md:h-[602px] w-[414px] relative top-[570px] md:top-0 left-[42px] 
        md:left-[195px] py-28 md:py-[160px] flex gap-24'>
         <div className='md:w-[547px] md:h-[282px] flex gap-[30px] flex-col '>
            <h2 className='md:w-[547px] md:h-[50px] w-[332px] h-[100px] font-montserrat font-bold 
            text-[#252B42] text-[40px] leading-[50px] tracking-[0.2px] text-center relative
             md:left-[220px] left-[10px]'>
                Start your 14 days free trial</h2>
            <h1 className='md:w-[411px] md:h-10 w-[321px] h-[60px] font-montserrat font-normal text-[#737373]
            text-[14px] leading-5 text-center relative left-[26px] md:left-[300px] tracking-[0.2px]'>
              Met minim Mollie non desert Alamo est sit cliquey dolor 
            do met sent. RELIT official consequent.</h1>
            <button className='w-[186px] h-[52px] flex gap-[10px] rounded-[5px] bg-[#23A6F0]
            py-[15px] px-10 hover:bg-[#395185] duration-[1000px] relative left-[70px] md:left-[400px]'>
            <h2 className='md:w-[106px] md:h-[22px] text-white font-montserrat font-bold
            text-[14px] leading-[22px] text-center tracking-[0.2px]'>Try it free now</h2>
            </button>
            <div className='w-[242px] -[50px] p-[10px] flex gap-[34px] relative md:left-[370px] left-[40px]
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