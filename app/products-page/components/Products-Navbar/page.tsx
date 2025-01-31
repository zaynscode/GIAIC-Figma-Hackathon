import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function ProductsNavbar() {
  return (
    
    <div className='xs:w-[414px] xs:h-[882px] md:w-[1342px] md:h-[58px] absolute 
      justify-around bg-white'>
    <div className='w-[187px] h-[58px] absolute xs:left-[35px] md:left-[119px]'>
        <h1 className='text-[#252B42] w-[108px] absolute md:top-[13px] xs:top-[23px] md:left-[60px]
         font-montserrat font-bold text-2xl trackking-[0.1px]'>Bandage</h1>
         <Image src={'image/menu.svg'}
           alt='Menu icon for mobile'
           width={24}
           height={15}
           className='xs:flex md:hidden  absolute xs:top-[32px] xs:left-[252px] '
           ></Image>
    </div>
    {/* links */}
    <div className='md:w-[815px] md:h-[58px] flex absolute md:left-[265px] xs:left-0'>
        <div className='md:w-[361px] md:h-[25px] xs:w-[123px] xs:h-[420px] absolute md:top-[16.5px]
        xs:top-[149px] xs:left-[115px] flex md:gap-[15px] xs:gap-[30px] md:flex-row xs:flex-col
        text-center items-center'>
            
            <h1 className='md:w-[43px] xs:w-[93px] xs:h-[45px] md:h-6 font-montserrat md:font-bold
            xs:font-normal md:text-sm xs:text-[30px] md:leading-6 xs:leading-[45px] items-center
             tracking-[0.2px] xs:text-[#252B42] md:text-[#737373] text-center'>Home</h1>
            
                  <Link href={'/product-list-page'}>
            <select className='w-[68px] h-[25px] flex gap-[10px] xs:hidden md:flex text-[#737373]
           left-[6px] text-sm leading-7 font-medium 
           tracking-[0.2px] font-montserrat text-center '>
                <option className='w-[38px] h-7 '>Shop</option>
                 </select>
                  </Link>

                {/* for mobile */}
                 <h1 className='w-[79px] h-[45px] font-montserrat font-normal text-[30px]
                 leading-[45px] text-center tracking-[0.2px] text-[#737373] xs:flex md:hidden'>Shop</h1>
            
            <h1 className='md:w-[45px] md:h-6 xs:w-[94px] xs:h-[45px] font-montserrat md:font-bold
            xs:font-normal md:text-sm xs:text-[30px] md:leading-6 xs:leading-[45px] items-center
             tracking-[0.2px] text-[#737373] text-center'>About
            </h1>
            
            <h1 className='md:w-[33px] md:h-6 xs:w-[94px] xs:h-[45px] font-montserrat md:font-bold
            xs:font-normal md:text-sm xs:text-[30px] md:leading-6 xs:leading-[45px] items-center
             tracking-[0.2px] text-[#737373] text-center'>Blog</h1>
             
            <Link href={'/contact-page'}>
            <h1 className='md:w-[58px] md:h-6 xs:w-[122px] xs:h-[45px] font-montserrat md:font-bold
            xs:font-normal md:text-sm xs:text-[30px] xs:leading-[45px] md:leading-6 items-center
            tracking-[0.2px] text-[#737373] text-center'>Contact</h1>
            </Link>

             <h1 className='md:w-11 md:h-6 xs:w-[94px] xs:h-[45px] font-montserrat md:font-bold
            xs:font-normal md:text-sm xs:text-[30px] md:leading-6 xs:leading-[45px] items-center
             tracking-[0.2px] text-[#737373] text-center'>Pages</h1>
             
        </div>


        <div className='md:w-[324px] md:h-[54px] xs:h-[265px] xs:w-[310px] absolute xs:top-[620px]
         md:top-[2px] md:left-[662px] xs:left-[32px] md:flex xs:flex-col'>
          <div className='md:w-[166px] md:h-[54px]  md:flex'>
            <div className='md:w-[166px] md:h-[54px] xs:w-[310px] xs:h-[75px] rounded-[37px] p-[15px]
             flex gap-[5px] '>
              <Image src={'/image/profile-icon.svg'}
              alt='Profile Icon'
              width={12}
              height={12}
              className='xs:hidden md:flex'
              ></Image>

              {/* for mobile */}
              <Image src={'/image/profile-icon.svg'}
              alt='Profile Icon'
              width={27}
              height={28}
              className='xs:flex md:hidden'
              ></Image>
              <h1 className='md:w-[119px] md:h-6 xs:w-[248px] xs:h-[45px] font-montserrat md:font-bold
              xs:font-normal md:text-[12px] md:leading-6 xs:text-[30px] xs:leading-[45px] tracking-[0.2px]
              text-center text-[#23A6F0]'>Login / Register</h1>
           </div>
          {/* search icon */}
           <Image src={'image/search.svg'}
           alt='Search icon'
           width={46}
           height={46}
           className='md:flex xs:hidden'
           ></Image>

           {/* for mobile */}
           <Image src={'image/search.svg'}
           alt='Search icon'
           width={64}
           height={64}
           className='md:hidden xs:flex xs:justify-self-center'
           ></Image>

           {/* cart icon */}
           <Image src={'image/cart.svg'}
           alt='Cart icon'
           width={56}
           height={46}
           className='xs:hidden md:flex '
           ></Image>
          
          {/* for mobile */}
          <Image src={'image/cart.svg'}
           alt='Cart icon'
           width={77}
           height={67}
           className='md:hidden xs:flex xs:justify-self-center'
           ></Image>


           <Image src={'image/favorite.svg'}
           alt='Favorite icon'
           width={46}
           height={46}
           className='xs:hidden md:flex'></Image>

           {/* for mobile */}
           <Image src={'image/favorite.svg'}
           alt='Favorite icon'
           width={69}
           height={59}
           className='md:hidden xs:flex xs:justify-self-center'></Image>
          </div>

        </div>

    </div>
    </div>
  )
}

export default ProductsNavbar