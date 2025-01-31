import Image from 'next/image'
import React from 'react'

function AboutContainer() {
  return (
    <div className='md:w-[1050px] md:h-[800px] absolute md:top-[104px] md:left-[195px] md:py-28 flex 
    md:gap-20 flex-col xs:w-[414px] xs:h-[1280px] xs:top-[536px] xs:py-20'>
        <div className='md:w-[1044px] xs:w-[418px] xs:h-[1071px] md:h-[331px] flex md:gap-[30px]
        xs:gap-[41px] xs:flex-col md:flex-row'>
            <div className='md:w-[599px] md:h-[321px] xs:w-[418px] xs:h-[590px] flex md:gap-[35px]
            xs:gap-10 flex-col xs:place-items-center md:place-items-start'>
                <h1 className='md:w-[149px] md:h-6 md:font-bold font-montserrat md:text-base text-[#252B42]
            tracking-[0.2px] md:flex xs:hidden'>ABOUT COMPANY
                </h1>
                <h1 className='md:w-[542px] md:h-20 xs:w-[213px] xs:h-[50px] text-[#252B42] 
                font-montserrat font-bold  xs:leading-[50px] xs:text-[40px] md:text-[58px] 
                md:leading-20 tracking-[0.2px] xs:text-center md:text-start'>ABOUT US
                </h1>
                <h1 className='md:w-[370px] md:h-[60px] xs:w-[277px] xs:h-[120px] font-montserrat
                 font-normal text-[20px] leading-[30px] xs:text-center md:text-start tracking-[0.2px] text-[#737373]'>
                    We know how large 
                    objects will act, but things 
                    on a small scale <span className='md:hidden'>just do 
                    not act that way.</span>
                </h1>

                <button className='md:w-[195px] md:h-[52px] flex gap-[10px] rounded-[5px] 
                bg-[#23A6F0] py-[15px] md:py-[22px] px-10 hover:bg-[#737373]'>
                    <h1 className='w-[115px] h-[22px]  text-white font-montserrat 
                    font-bold text-[14px] md:leading-[13px] text-center tracking-[0.2px]'>
                        Get Quote Now</h1>
                </button>
            </div>

            <div className='md:w-[415px] md:h-[280px]'>
                <Image src={'/image/about.svg'}
                alt='About page image'
                width={571}
                height={668}
                className='absolute xs:top-[430px] md:top-[-26px] xs:left-[50px] md:left-[534px] 
                xs:w-[287px] xs:h-[440px] md:w-[571px] md:h-[668px]'>
                </Image>
            </div>

        </div>

        <div className='md:w-[1020px] md:h-[246px] xs:w-[414px] xs:h-[310px] md:py-6 relative
         md:top-[30px] xs:top-[20px]'>
            <div className='md:w-[1018px] md:h-[188px] flex gap-[60px] xs:w-[381px] xs:h-[340px] 
            xs:flex-col  md:flex-row '>
                <div className='md:w-[394px] md:h-[188px] md:py-6 flex gap-20 relative xs:top-[20px] 
                xs:text-center md:text-start'>
                    <div className='md:w-[394px] md:h-[340px] h-[172px] w-[381px] flex gap-6 flex-col'>
                        <h2 className='w-[116px] h-5 font-montserrat font-normal text-[#E74040]
                        text-[14px] leading-5 relative xs:left-[140px] md:left-[40px] tracking-[0.2px]'>Problems trying</h2>

                    <h2 className='md:w-[394px] md:h-24 w-[269px] h-[128px] font-bold font-montserrat
                     text-2xl text-[#252B42] tracking-[0.1px] relative left-[60px] md:left-10'>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h2>
                    </div>

                    </div>

                    <div className='md:w-[599px] md:h-10 w-[306px] h-[60px] flex gap-[38px] md:gap-[49px]
                     relative top-[50px] left-[39px] md:top-[95px] md:left-0'>
                        <h2 className='md:w-[545px] md:h-10 w-[353px] h-[60px] text-[#737373] 
                        font-montserrat text-sm tracking-[0.2px] font-normal '>
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </h2>


                </div>
        </div>

            </div>


    </div>
  )
}

export default AboutContainer