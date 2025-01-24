import React from 'react'
import Image from 'next/image'

function ContactContainer() {
  return (
    <div className='w-[1050px] h-[742px] absolute top-[104px] left-[195px] py-[112px] flex gap-20 '>
        <div className='w-[1044px] h-[518px] flex gap-[30px] justify-between'>
            <div className='w-[599px] h-[518px] flex flex-col gap-[35px]'>
                <h2 className='w-[108px] h-6 font-montserrat font-bold text-base tracking-[0.1px]'>
                    CONTACT US</h2>
                <h1 className='w-[378px] h-[160px] text-[#252B42] font-montserrat font-bold text-[58px]
                leading-[80px] tracking-[0.2px] justify-self-start'>Get in touch 
                today!</h1>    
                <h1 className='w-[376px] h-[60px] text-[#737373] font-montserrat font-normal text-[20px]
                leading-[30px] tracking-[0.2px]'>We know how large objects will act, 
                but things on a small scale</h1>

                <div className='w-[242px] h-[84px]'>
                    <h2 className='w-[242px] h-8 font-montserrat font-bold text-[22px] leading-8
                     text-[#252B42]'>Phone ; +451 215 215 </h2>
                    <h2 className='w-[207px] h-8 relative top-[52px] font-montserrat font-bold text-[22px] leading-8
                     text-[#252B42]'>Fax : +451 215 215</h2>
                </div>

                <div className='w-[242px] h-[50px] p-[10px] flex gap-[34px] relative top-[20px]'>
                    
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


        <div className='w-[632px] h-[612px] relative top-[-110px] '>
        <Image src={"/image/contact-page-img.svg"}
                    alt='Contact page Family picture'
                    width={632}
                    height={612}></Image>
            

        </div>
        </div>

    </div>
  )
}

export default ContactContainer