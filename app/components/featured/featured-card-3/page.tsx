import React from 'react'
import Image from 'next/image'

function FeaturedCard3() {
  return (
      <div className='w-[328px] h-[606px] drop-shadow-[0px,2px,4px,0px] bg-transparent
      shadow-black'>
            {/* Third Image */}
            <div className='w-[348px] h-[300px] relative'>
                <Image src={'/image/featured-post-3.svg'}
                alt='Featured Post 3'
                width={348}
                height={300}
                className='object-cover'></Image>
               <div className='w-[59px] h-6 absolute top-5 left-5 rounded-[3px] px-[10px] bg-[#E74040]'>
                <h1 className='w-[38px] h-6 font-montserrat font-bold text-sm items-center
                tracking-[0.2px] text-[#FFFFFF]'>NEW</h1>
                </div> 
            </div>
            {/* Text section */}
            <div className='w-[348px] h-[306px] pt-[25px] px-[25px] pb-[35px] flex gap-[10px] flex-col'>
                <div className='w-[159px] h-4 flex gap-[15px] flex-row'>
                    <h1 className='w-[45px] h-4 font-montserrat font-normal text-xs text-[#8EC2F2]
                    tracking-[0.2px]'>Google</h1>
                    <h1 className='w-[56px] h-4 font-montserrat font-normal text-xs text-[#737373]
                    tracking-[0.2px]'>Trending</h1>
                    <h1 className='w-7 h-4 font-montserrat font-normal text-xs text-[#737373]
                    tracking-[0.2px]'>New</h1>
                </div>
                <h1 className='w-[247px] h-[60px] font-montserrat font-normal text-xl text-[#252B42]
                tracking-[0.2px]'>Loudest à la Madison #1 
                (Lintegral)</h1>
                <p className='w-[280px] h-[60px] font-normal font-montserrat text-sm text-[#737373]
                tracking-[0.2px]'>We focus on ergonomics and meeting 
                you where you work. Its only a 
                keystroke away.</p>
                {/* Date and Graph */}
                <div className='w-[298px] h-[46px] justify-between py-[15px] flex flex-row'>
                    <div className='w-[98px] h-4 flex gap-[5px]'>
                        <Image src={'/image/clock.svg'}
                        alt='Clock Icon'
                        width={16}
                        height={16}></Image>
                        <h1 className='w-[77px] h-6 font-montserrat font-normal text-xs text-[#737373]
                        tracking-[0.2px]'>22 April 2021</h1>
                    </div>
                    {/* Graph */}
                    <div className='w-[105px] h-4 flex gap-[5px]'>
                    <Image src={'/image/graph.svg'}
                        alt='Graph Icon'
                        width={16}
                        height={14.47}></Image>
                        <h1 className='w-[84px] h-6 font-montserrat font-normal text-xs text-[#737373]
                        tracking-[0.2px]'>10 comments</h1>
                    </div>
                </div>
                <div className='w-[104px] h-6 flex gap-[10px]'>
                    <h1 className='w-[85px] h-6 font-montserrat font-bold text-[#737373]
                    text-sm tracking-[0.2px]'>Learn More</h1>
                    <Image src={'/image/icon arrow-next.svg'}
                    alt='Next Arrow Icon'
                    width={9}
                    height={16}>
                    </Image>

                </div>
            </div>
        </div>

   

)
}

export default FeaturedCard3