'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/16/solid'
function Navbar() {
  return (
    
    <div className='w-[428px] h-[532px] md:w-[1300px] md:h-[58px] absolute md:top-[70px] 
      justify-around '>
    <div className='w-[187px] h-[58px] absolute md:left-[119px] left-[30px]'>
      <Link href={'/'}>
        <h1 className='text-[#252B42] w-[78px] absolute md:top-[13px] top-[23px] md:left-[60px]
         font-montserrat font-bold text-2xl trackking-[0.1px]'>Bandage</h1>
         </Link>
    </div>
    {/* links */}
    <div className='md:w-[815px] md:h-[58px] flex absolute md:left-[265px] left-0'>
        <div className='md:w-[361px] md:h-[25px] w-[123px] h-[270px] absolute md:top-[16.5px]
        top-[164px] left-[105px] flex md:gap-[15px] gap-[30px] md:flex-row flex-col
        text-center items-center'>
            <Link href={'/'}>
            <h1 className='md:w-[43px] w-[93px] h-[45px] md:h-6 font-montserrat md:font-bold
            font-normal md:text-sm text-3xl md:leading-6 leading-[45px] items-center
            tracking-[0.2px] text-[#737373] text-center hover:text-[#23A6F0] duration-700'>Home</h1>
            </Link>
            <Link href={'/product-list-page'}>
            <select className='w-[68px] h-[25px] flex gap-[10px] xs:hidden md:flex text-[#737373]
           left-[6px] text-sm leading-7 font-medium hover:text-[#23A6F0] duration-700
           tracking-[0.2px] font-montserrat text-center '>
                <option className='w-[38px] h-7 '>Shop</option>
                 </select>
                  </Link>

            <Link href={'/about'}>
            <h1 className='w-[45px] h-6 font-montserrat font-bold text-sm leading-6 hover:text-[#23A6F0] duration-700
             tracking-[0.2px] text-[#737373] text-center xs:hidden md:flex'>About
            </h1>
             </Link>
            
            <Link href={'/pricing-page'}>
            <h1 className='md:w-[33px] md:h-6 md:font-bold md:text-[14px] md:leading-6 hover:text-[#23A6F0] duration-700
             md:tracking-[0.2px] text-[#737373] text-center xs:w-[93px] xs:h-[45px] font-montserrat
             font-normal text-[30px] leading-[45px] tracking-[0.2px] items-center xs:flex'>Pricing</h1>
             </Link>
            {/* for mobile */}
            <Link href={'/product-list-page'}>
            <h1 className='xs:w-[107px] xs:h-[45px] font-montserrat font-normal text-[30px] 
             leading-[45px] tracking-[0.2px] text-[#737373] items-center text-center md:hidden
             xs:flex'>Product</h1>
             </Link>

            <Link href={'/contact-page'}>
            <h1 className='md:w-[58px] md:h-6 xs:w-[122px] xs:h-[45px] font-montserrat md:font-bold
            xs:font-normal md:text-sm xs:text-[30px] xs:leading-[45px] md:leading-6 items-center
            tracking-[0.2px] text-[#737373] text-center hover:text-[#23A6F0] duration-700'>Contact</h1>
            </Link>
            
            <Link href={'/team-page'}>
             <h1 className='w-11 h-6 font-montserrat font-bold text-sm leading-6
             tracking-[0.2px] text-[#737373] text-center hover:text-[#23A6F0] duration-700'>Team</h1>
             </Link>  
        </div>


        <div className='w-[374px] md:h-[54px] xs:h-6 relative xs:top-0 md:top-[2px] md:left-[662px]
        xs:right-[2px] flex'>
          <div className='w-[166px] h-[54px] flex'>
            <div className='w-[166px] h-[54px] rounded-[37px] p-[15px] flex gap-[5px] xs:hidden md:flex'>
              <Image src={'/image/profile-icon.svg'}
              alt='Profile Icon'
              width={12}
              height={12}
              ></Image>
              <h1 className='w-[119px] h-6 font-montserrat font-bold text-xs leading-6 tracking-[0.2px]
              text-center text-[#23A6F0]'>Login / Register</h1>
           </div>
          {/* search icon */}
           <Image src={'image/search.svg'}
           alt='Search icon'
           width={46}
           height={46}
           className='md:flex xs:hidden'></Image>
          <Image src={'image/blue-search.svg'}
           alt='Blue Search icon for mobile'
           width={20}
           height={20}
           className='xs:flex md:hidden  absolute xs:top-[30px] xs:left-[248px] '
           ></Image>
           {/* cart icon */}
           <Image src={'image/cart.svg'}
           alt='Cart icon'
           width={56}
           height={46}
           className='xs:hidden md:flex'
           ></Image>
          <Image src={'image/blue-cart.svg'}
           alt='Blue Cart icon'
           width={20}
           height={20}
           className='md:hidden xs:flex absolute xs:top-[30px]  xs:left-[296px]'
           ></Image>

           <Image src={'image/favorite.svg'}
           alt='Favorite icon'
           width={46}
           height={46}
           className='md:flex xs:hidden'></Image>

            
            <Bars3Icon className='w-5 h-5 absolute xs:top-[28px] xs:left-[342px] md:hidden'></Bars3Icon>

          </div>

        </div>

    </div>
    </div>
  )
}

export default Navbar