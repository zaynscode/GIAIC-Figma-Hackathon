import React from 'react'
import Image from 'next/image'

function TeamRow2() {
  return (
    <div className='md:w-[1034px] md:h-[383px]  h-[1300px] flex gap-[30px] flex-col md:flex-row 
    items-center relative md:left-0 top-[-130px] md:top-0 left-[10px]'>
        {/* fourth member */}
         <div className='md:w-[316px] md:h-[383px] h-[403px] flex-col'>
        <Image src={'/image/team-4.svg'}
        alt='Member 4'
        width={316}
        height={231}></Image>
        <h2 className='w-[83px] h-6 font-montserrat font-bold text-[#252B42] text-base
        tracking-[0.1px] text-center py-10 pl-[110px]'>Username</h2>
        
        <h2 className='w-[83px] h-6 font-montserrat font-bold text-[#737373] text-base
        tracking-[0.1px] text-center pl-[110px]'>Profession</h2>
        <div className='md:w-28 h-6 flex gap-5 flex-row relative left-[93px] top-[20px] md:top-[10px]'>
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

         {/* fifth member */} 
         <div className='md:w-[316px] md:h-[383px] h-[403px] flex-col'>
        <Image src={'/image/team-5.svg'}
        alt='Member 5'
        width={316}
        height={231}></Image>
        <h2 className='w-[83px] h-6 font-montserrat font-bold text-[#252B42] text-base
        tracking-[0.1px] text-center py-10 pl-[110px]'>Username</h2>
      
        <h2 className='w-[83px] h-6 font-montserrat font-bold text-[#737373] text-base
        tracking-[0.1px] text-center pl-[110px]'>Profession</h2>
        <div className='md:w-28 h-6 flex gap-5 flex-row relative left-[93px] top-[20px] md:top-[10px]'>
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

        {/* sixth member */}
         <div className='md:w-[316px] md:h-[383px] flex-col'>
        <Image src={'/image/team-6.svg'}
        alt='Member 6'
        width={316}
        height={231}></Image>
         <h2 className='w-[83px] h-6 font-montserrat font-bold text-[#252B42] text-base
        tracking-[0.1px] text-center py-10 pl-[110px]'>Username</h2>
      
        <h2 className='w-[83px] h-6 font-montserrat font-bold text-[#737373] text-base
        tracking-[0.1px] text-center pl-[110px]'>Profession</h2>
        <div className='md:w-28 h-6 flex gap-5 flex-row relative left-[93px] top-[20px] md:top-[10px]'>
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

export default TeamRow2