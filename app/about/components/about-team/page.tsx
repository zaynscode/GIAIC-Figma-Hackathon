import React from 'react'
import Image from 'next/image'

function AboutTeam() {
  return (
    <div className='md:w-[1342px] md:h-[736px] relative'>
        <div className='md:w-[1050px] md:h-[819px] absolute md:left-[195px] py-24 flex gap-24 flex-col '>
            <div className='md:w-[607px] md:h-[100px] flex gap-[10px] relative left-[360px] flex-col'>
                <h1 className='md:w-[316px] md:h-[50px] font-bold md:text-[40px] md:leading-[50px]
                text-[#252B42] tracking-[0.2px]'>Meet Our Team
                </h1>
                <h2 className='md:w-[469px] md:h-10 font-normal font-montserrat text-[#737373]
                text-sm tracking-[0.2px] text-center relative right-[90px]'>Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics </h2>
            </div>

            <div className='md:w-[1034px] md:h-[383px] flex gap-[30px] flex-row'>

                 {/* First Image */}
                 <div className='md:w-[316px] md:h-[383px]'>
                    <Image src={'/image/about-img-1.svg'}
                    alt='About Team Section first Image'
                    width={316}
                    height={234}></Image>
                <div className='md:w-[316px] md:h-[152px] p-[30px] flex gap-[10px] relative left-[80px] flex-col'>
                <h2 className='md:w-[83px] md:h-6 font-montserrat font-bold text-base text-[#252B42]
                text-center tracking-[0.1px]'>Username</h2>
                <h1 className='md:w-[77px] md:h-6 font-montserrat font-bold text-[14px] leading-6
                text-[#737373] text-center'>Profession</h1>
                <div className='md:w-28 h-6 flex gap-5 relative left-[-20px]'>
                    {/* Facebook */}
                    <Image src={'/image/facebook-blue.svg'}
                    alt='Facebook Icon'
                    width={24}
                    height={24}></Image>
                    {/* Instagram */}
                    <Image src={'/image/instagram-blue.svg'}
                    alt='Instagram Icon'
                    width={24}
                    height={24}></Image>
                    {/* Twitter */}
                    <Image src={'/image/twitter-blue.svg'}
                    alt='Twitter Icon'
                    width={24}
                    height={24}></Image>

                </div>
                </div>
            </div>

                        {/* Second Image */}
                <div className='md:w-[316px] md:h-[383px]'>
                    <Image src={'/image/about-img-2.svg'}
                    alt='About Team Section second Image'
                    width={316}
                    height={231}></Image>
                <div className='md:w-[316px] md:h-[152px] p-[30px] flex gap-[10px] relative left-[80px] flex-col'>
                <h2 className='md:w-[83px] md:h-6 font-montserrat font-bold text-base text-[#252B42]
                text-center tracking-[0.1px]'>Username</h2>
                <h1 className='md:w-[77px] md:h-6 font-montserrat font-bold text-[14px] leading-6
                text-[#737373] text-center'>Profession</h1>
                <div className='md:w-28 h-6 flex gap-5 relative left-[-20px]'>
                    {/* Facebook */}
                    <Image src={'/image/facebook-blue.svg'}
                    alt='Facebook Icon'
                    width={24}
                    height={24}></Image>
                    {/* Instagram */}
                    <Image src={'/image/instagram-blue.svg'}
                    alt='Instagram Icon'
                    width={24}
                    height={24}></Image>
                    {/* Twitter */}
                    <Image src={'/image/twitter-blue.svg'}
                    alt='Twitter Icon'
                    width={24}
                    height={24}></Image>

                </div>
                </div>
                </div>

            {/* Third Image */}
                <div className='md:w-[316px] md:h-[231px]'>
                    <Image src={'/image/about-img-3.svg'}
                    alt='About Team Section third Image'
                    width={329}
                    height={234}></Image>
                <div className='md:w-[316px] md:h-[152px] p-[30px] flex gap-[10px] relative left-[80px] flex-col'>
                <h2 className='md:w-[83px] md:h-6 font-montserrat font-bold text-base text-[#252B42]
                text-center tracking-[0.1px]'>Username</h2>
                <h1 className='md:w-[77px] md:h-6 font-montserrat font-bold text-[14px] leading-6
                text-[#737373] text-center'>Profession</h1>
                <div className='md:w-28 h-6 flex gap-5 relative left-[-20px]'>
                    {/* Facebook */}
                    <Image src={'/image/facebook-blue.svg'}
                    alt='Facebook Icon'
                    width={24}
                    height={24}></Image>
                    {/* Instagram */}
                    <Image src={'/image/instagram-blue.svg'}
                    alt='Instagram Icon'
                    width={24}
                    height={24}></Image>
                    {/* Twitter */}
                    <Image src={'/image/twitter-blue.svg'}
                    alt='Twitter Icon'
                    width={24}
                    height={24}></Image>

                </div>
                </div>
                </div>
            </div>

                       
        </div>

    </div>
  )
}

export default AboutTeam