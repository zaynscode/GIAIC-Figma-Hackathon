import React from 'react'
import Image from 'next/image'
function Navbar() {
  return (
    
    <div className='xs:w-[414px] xs:h-[532px] md:w-full md:h-[58px] absolute md:top-[70px] md:left-[38px]
     flex justify-between'>
    <div className='w-[187px] h-[58px] absolute left-[38px]'>
        <h1 className='text-[#252B42] w-[108px] absolute md:top-[13px] xs:top-[23px] md:left-0
         font-montserrat font-bold text-2xl trackking-[0.1px]'>Bandage</h1>
    </div>
    {/* links */}
    <div className='md:w-[1115px] md:h-[58px] flex absolute md:left-[265px] xs:left-0'>
        <div className='md:w-[361px] md:h-[25px] xs:w-[123px] xs:h-[270px] absolute md:top-[16.5px]
        xs:top-[164px] xs:left-[145px] flex md:gap-[15px] xs:gap-[30px] md:flex-row xs:flex-col
        text-center items-center'>
            
            <h1 className='md:w-[43px] xs:w-[93px] xs:h-[45px] md:h-6 font-montserrat md:font-bold
            xs:font-normal md:text-sm xs:text-3xl md:leading-6 xs:leading-[45px] items-center
             tracking-[0.2px] text-[#737373] text-center'>Home</h1>
            
            <div className='w-[63px] h-[25px] flex gap-[10px] xs:hidden md:flex'>
                <h1 className='w-[38px] h-7 left-[6px] text-sm leading-7 font-medium text-[#737373]
                tracking-[0.2px] font-montserrat text-center '>Shop</h1>
                <Image src={'/image/Vector.svg'}
                            alt='Vector Icon'
                            width={10}
                            height={10}
                            ></Image>
                 </div>
            
            <h1 className='w-[45px] h-6 font-montserrat font-bold text-sm leading-6
             tracking-[0.2px] text-[#737373] text-center xs:hidden md:flex'>About
            </h1>
            
            <h1 className='w-[33px] h-6 font-montserrat font-bold text-sm leading-6
             tracking-[0.2px] text-[#737373] text-center xs:hidden md:flex'>Blog</h1>
            {/* for mobile */}
            <h1 className='xs:w-[107px] xs:h-[45px] font-montserrat font-normal text-[30px] 
             leading-[45px] tracking-[0.2px] text-[#737373] items-center text-center md:hidden
              xs:flex'>Product</h1>
              {/* for mobile */}
            <h1 className='xs:w-[93px] xs:h-[45px] font-montserrat font-normal text-[30px] 
             leading-[45px] tracking-[0.2px] text-[#737373] text-center items-center md:hidden
              xs:flex'>Pricing</h1> 

            <h1 className='md:w-[58px] md:h-6 xs:w-[122px] xs:h-[45px] font-montserrat md:font-bold
            xs:font-normal md:text-sm xs:text-[30px] xs:leading-[45px] md:leading-6 items-center
             tracking-[0.2px] text-[#737373] text-center'>Contact</h1>
            
             <h1 className='w-11 h-6 font-montserrat font-bold text-sm leading-6
             tracking-[0.2px] text-[#737373] text-center xs:hidden md:flex'>Pages</h1>
        </div>


        <div className='w-[324px] md:h-[54px] xs:h-6 absolute xs:top-0 md:top-[2px] md:left-[662px]
         xs:left-0 flex'>
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

          <Image src={'image/menu.svg'}
           alt='Menu icon for mobile'
           width={20}
           height={20}
           className='xs:flex md:hidden  absolute xs:top-[32px] xs:left-[342px] '
           ></Image>

          </div>

        </div>

    </div>
    </div>
  )
}

export default Navbar