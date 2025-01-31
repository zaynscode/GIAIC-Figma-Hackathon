import React from 'react'
import Image from 'next/image'

function TeamRow1() {
  return (
    <div className='md:w-[1034px] md:h-[383px] flex gap-[30px] flex-row'>
        {/* first member */}
        <div className='md:w-[316px] md:h-[383px] flex-col'>
        <Image src={'/image/team-1.svg'}
        alt='Member 1'
        width={316}
        height={231}></Image>
        <h2 className='md:w-[83px] md:h-6 font-montserrat font-bold text-[#252B42] text-base
        tracking-[0.1px] text-center py-10 pl-[110px]'>Username</h2>
        
        <h2 className='md:w-[83px] md:h-6 font-montserrat font-bold text-[#737373] text-base
        tracking-[0.1px] text-center  pl-[110px]'>Profession</h2>
        <div className='md:w-28 h-6 flex gap-5 flex-row relative left-[93px] top-[10px]'>
            <Image src={'/image/facebook-blue.svg'}
            alt='Facebook icon'
            width={24}
            height={24}></Image>
            <Image src={'/image/instagram-blue.svg'}
            alt='Instagram icon'
            width={24}
            height={24}></Image>
            <Image src={'/image/twitter-blue.svg'}
            alt='Twitter icon'
            width={24}
            height={24}></Image>
        </div>
        </div>

        {/* second member */}
        <div className='md:w-[316px] md:h-[383px] flex-col'>
        <Image src={'/image/team-2.svg'}
        alt='Member 2'
        width={316}
        height={231}></Image>
        <h2 className='md:w-[83px] md:h-6 font-montserrat font-bold text-[#252B42] text-base
        tracking-[0.1px] text-center py-10 pl-[110px]'>Username</h2>
        
        <h2 className='md:w-[83px] md:h-6 font-montserrat font-bold text-[#737373] text-base
        tracking-[0.1px] text-center  pl-[110px]'>Profession</h2>
        <div className='md:w-28 h-6 flex gap-5 flex-row relative left-[93px] top-[10px]'>
            <Image src={'/image/facebook-blue.svg'}
            alt='Facebook icon'
            width={24}
            height={24}></Image>
            <Image src={'/image/instagram-blue.svg'}
            alt='Instagram icon'
            width={24}
            height={24}></Image>
            <Image src={'/image/twitter-blue.svg'}
            alt='Twitter icon'
            width={24}
            height={24}></Image>
        </div>
        </div>

        {/* third member */}
        <div className='md:w-[316px] md:h-[383px] flex-col'>
        <Image src={'/image/team-3.svg'}
        alt='Member 3'
        width={316}
        height={231}></Image>
        <h2 className='md:w-[83px] md:h-6 font-montserrat font-bold text-[#252B42] text-base
        tracking-[0.1px] text-center py-10 pl-[110px]'>Username</h2>
        
        <h2 className='md:w-[83px] md:h-6 font-montserrat font-bold text-[#737373] text-base
        tracking-[0.1px] text-center  pl-[110px]'>Profession</h2>
        <div className='md:w-28 h-6 flex gap-5 flex-row relative left-[93px] top-[10px]'>
            <Image src={'/image/facebook-blue.svg'}
            alt='Facebook icon'
            width={24}
            height={24}></Image>
            <Image src={'/image/instagram-blue.svg'}
            alt='Instagram icon'
            width={24}
            height={24}></Image>
            <Image src={'/image/twitter-blue.svg'}
            alt='Twitter icon'
            width={24}
            height={24}></Image>
        </div>
        </div>

    </div>
  )
}

export default TeamRow1