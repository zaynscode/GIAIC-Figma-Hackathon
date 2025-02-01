import React from 'react'
import Image from 'next/image'

function ContactContainer() {
  return (
    <div className='md:w-[1050px] md:h-[742px] h-[1080px] absolute top-[536px] py-20 left-[50px]
    md:top-[104px] md:left-[195px] md:py-[112px] flex gap-[41px] md:gap-20 '>
        <div className='md:w-[1044px] md:h-[518px] flex md:flex-row md:gap-[30px] md:justify-between flex-col'>
            <div className='md:w-[599px] md:h-[518px] w-[414px] h-[590px] flex flex-col gap-10 md:gap-[35px]'>
                <h2 className='w-[108px] h-6 font-montserrat font-bold text-base tracking-[0.1px] 
                relative left-[110px] md:left-0'>
                    CONTACT US</h2>
                <h1 className='md:w-[378px] h-[160px] w-[351px] text-[#252B42] font-montserrat font-bold
                 text-[58px] leading-[80px] tracking-[0.2px] md:justify-self-start relative left-[-6px] 
                 text-center md:text-start'>Get in touch 
                today!</h1>    
                <h1 className='md:w-[376px] md:h-[60px] w-[277px] h-[120px] text-[#737373] font-montserrat font-normal text-[20px]
                leading-[30px] tracking-[0.2px] text-center md:text-start relative left-[30px] 
                md:left-0'>We know how large objects will act, 
                but things on a small scale</h1>

                <div className='w-[242px] h-[84px] relative md:left-0 left-[60px]'>
                    <h2 className='w-[242px] h-8 font-montserrat font-bold text-[22px] leading-8
                     text-[#252B42] text-center md:text-start'>Phone ; +451 215 215 </h2>
                    <h2 className='w-[207px] h-8 relative top-[52px] font-montserrat font-bold text-[22px] leading-8
                     text-[#252B42] text-center md:text-start'>Fax : +451 215 215</h2>
                </div>

                <div className='w-[242px] h-[50px] p-[10px] flex gap-[34px] relative top-[20px] left-[40px]
                md:left-0'>
                    
                    <Image src={"/image/contact-twitter.svg"}
                    alt='Twitter Logo'
                    width={30}
                    height={24}></Image>
                    <Image src={"/image/contact-facebook.svg"}
                    alt='Facebook Logo'
                    width={30}
                    height={30}></Image>
                    <Image src={"/image/contact-instagram.svg"}
                    alt='Instagram Logo'
                    width={30}
                    height={30}></Image>
                    <Image src={"/image/contact-linkedin.svg"}
                    alt='Linkedin Logo'
                    width={30}
                    height={30}></Image>

                </div>

            </div>


        <div className='md:w-[632px] md:h-[612px] w-[387px] h-[440px] relative top-[80px] md:top-[-110px] '>
        <Image src={"/image/contact-page-img.svg"}
                    alt='Contact page Family picture'
                    width={632}
                    height={612}
                    className='md:w-[632px] md:h-[612px] w-[387px] h-[440px]'></Image>
            

        </div>
        </div>

    </div>
  )
}

export default ContactContainer