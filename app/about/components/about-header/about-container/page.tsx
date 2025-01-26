import Image from 'next/image'
import React from 'react'

function AboutContainer() {
  return (
    <div className='md:w-[1050px] md:h-[800px] absolute md:top-[104px] md:left-[195px] py-28 flex 
    md:gap-20 flex-col'>
        <div className='md:w-[1044px] md:h-[331px] flex gap-[30px] md:flex-row'>
            <div className='md:w-[599px] md:-[321px] flex gap-[35px] flex-col'>
                <h1 className='md:w-[149px] md:h-6 md:font-bold font-montserrat md:text-base text-[#252B42]
            tracking-[0.2px]'>ABOUT COMPANY
                </h1>
                <h1 className='md:w-[542px] md:h-20 text-[#252B42] font-montserrat md:font-bold
                md:text-[58px] md:leading-20 tracking-[0.2px]'>ABOUT US
                </h1>
                <h1 className='md:w-[370px] md:h-[60px] font-montserrat md:font-normal md:text-xl
                tracking-[0.2px text-[#737373]'>
                    We know how large objects will act, 
                but things on a small scale
                </h1>

                <button className='md:w-[195px] md:h-[95px] flex gap-[10px] rounded-[5px] bg-[#23A6F0]
                py-[22px] px-10 hover:bg-[#737373]'>
                    <h1 className='md:w-[115px] md:h-[22px] text-white font-montserrat 
                    md:font-bold text-[14px] md:leading-[22px] text-center tracking-[0.2px]'>
                        Get Quote Now</h1>
                </button>
            </div>

            <div className='md:w-[415px] md:h-[280px]'>
                <Image src={'/image/about.svg'}
                alt='About page image'
                width={571}
                height={668}
                className='absolute md:top-[-26px] left-[534px]'>
                </Image>
            </div>

        </div>

        <div className='md:w-[1020px] md:h-[246px] md:py-6 relative md:top-[30px]'>
            <div className='md:w-[1018px] md:h-[188px] flex md:gap-[60px] md:flex-row'>
                <div className='md:w-[394px] md:h-[188px] md:py-6 flex gap-20 '>
                    <div className='md:w-[394px] md:h-[340px] flex gap-6 flex-col'>
                        <h2 className='md:w-[116px] md:h-5 font-montserrat font-normal text-[#E74040]
                        md:text-[14px] md:leading-5 tracking-[0.2px]'>Problems trying</h2>

                    <h2 className='md:w-[394px] md:h-24 font-bold font-montserrat md:text-2xl
                    text-[#252B42 tracking-[0.1px]'>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h2>
                    </div>

                    </div>

                    <div className='md:w-[599px] md:h-10 flex gap-[49px] relative top-[75px]'>
                        <h2 className='md:w-[545px] md:h-10 text-[#737373] font-montserrat text-sm tracking-[0.2px] font-normal'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </h2>


                </div>
        </div>

            </div>


    </div>
  )
}

export default AboutContainer